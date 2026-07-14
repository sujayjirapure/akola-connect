import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertTriangle, CheckCircle2, Upload, X, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Complaints — Akola Telecom & IP Networks Pvt Ltd" },
      { name: "description", content: "Contact Akola Telecom for new broadband connections, enterprise networking, CCTV or IT solutions. File a service complaint with photo attachments and get a quick resolution." },
      { property: "og:title", content: "Contact Akola Telecom & IP Networks" },
      { property: "og:description", content: "New connection enquiries and 24/7 complaint support for broadband, networking, CCTV and IT solutions in Akola." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type Status = { ok: boolean; msg: string } | null;

function Contact() {
  const [mode, setMode] = useState<"contact" | "complaint">("contact");
  const [status, setStatus] = useState<Status>(null);
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
    accountId: "", issueType: "internet-down", priority: "normal",
  });

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const valid = files.filter((f) => f.type.startsWith("image/") && f.size <= 5 * 1024 * 1024);
    if (valid.length !== files.length) {
      setStatus({ ok: false, msg: "Only images up to 5 MB are allowed." });
    }
    const next = [...images, ...valid.map((f) => ({ file: f, preview: URL.createObjectURL(f) }))].slice(0, 4);
    setImages(next);
    if (fileInput.current) fileInput.current.value = "";
  };

  const removeImage = (i: number) => {
    URL.revokeObjectURL(images[i].preview);
    setImages(images.filter((_, idx) => idx !== i));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ ok: false, msg: "Please fill in name, email and message." });
      return;
    }
    if (form.name.length > 100 || form.email.length > 255 || form.message.length > 1000) {
      setStatus({ ok: false, msg: "Some fields are too long." });
      return;
    }
    // TODO: wire this up to your backend (Node/Express + MongoDB or Lovable Cloud).
    console.log("[form submit]", { mode, ...form, images: images.map((i) => i.file.name) });
    setStatus({
      ok: true,
      msg: mode === "contact"
        ? "Thanks! We'll get back to you within 1 business day."
        : "Complaint received. Our support team will contact you shortly with a ticket ID.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "", accountId: "", issueType: "internet-down", priority: "normal" });
    images.forEach((i) => URL.revokeObjectURL(i.preview));
    setImages([]);
  };

  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Clock className="h-3.5 w-3.5" /> Typical response within 1 hour
          </span>
          <h1 className="font-display text-4xl font-bold md:text-5xl">Let's talk</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Whether you want a new connection or need to report a service issue —
            our Akola team is here and we respond fast.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Info column */}
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Visit us", value: "Akola, Maharashtra, India" },
              { icon: Phone, label: "Call us", value: "+91 00000 00000" },
              { icon: Mail, label: "Email us", value: "info@akolatelecom.com" },
              { icon: Clock, label: "Support hours", value: "Mon–Sat • 9 AM – 9 PM" },
            ].map((c) => (
              <div key={c.label} className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-0.5 text-sm font-medium text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form column */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              {/* Toggle */}
              <div className="mb-6 inline-flex rounded-xl bg-secondary p-1">
                <button
                  type="button"
                  onClick={() => { setMode("contact"); setStatus(null); }}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-smooth ${mode === "contact" ? "bg-gradient-brand text-primary-foreground shadow-elegant" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <MessageSquare className="h-4 w-4" /> Contact
                </button>
                <button
                  type="button"
                  onClick={() => { setMode("complaint"); setStatus(null); }}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-smooth ${mode === "complaint" ? "bg-gradient-brand text-primary-foreground shadow-elegant" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <AlertTriangle className="h-4 w-4" /> Complaint
                </button>
              </div>

              <h2 className="font-display text-2xl font-bold">
                {mode === "contact" ? "Send us a message" : "File a service complaint"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {mode === "contact"
                  ? "Fill this in and our team will get back to you shortly."
                  : "Give us your account details so we can resolve your issue quickly."}
              </p>

              <form onSubmit={submit} className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full name *" value={form.name} onChange={update("name")} maxLength={100} />
                  <Field label="Email *" type="email" value={form.email} onChange={update("email")} maxLength={255} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Phone" type="tel" value={form.phone} onChange={update("phone")} maxLength={20} />
                  {mode === "contact" ? (
                    <Field label="Subject" value={form.subject} onChange={update("subject")} maxLength={150} />
                  ) : (
                    <Field label="Account / Customer ID" value={form.accountId} onChange={update("accountId")} maxLength={50} />
                  )}
                </div>

                {mode === "complaint" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <Select label="Issue type" value={form.issueType} onChange={update("issueType")}>
                      <option value="internet-down">Internet is down</option>
                      <option value="slow-speed">Slow speed</option>
                      <option value="billing">Billing issue</option>
                      <option value="cctv">CCTV / hardware issue</option>
                      <option value="other">Other</option>
                    </Select>
                    <Select label="Priority" value={form.priority} onChange={update("priority")}>
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </Select>
                  </div>
                )}

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    {mode === "contact" ? "Message *" : "Describe the problem *"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/40"
                    placeholder={mode === "contact" ? "Tell us how we can help..." : "When did it start? What have you tried?"}
                  />
                  <div className="mt-1 text-right text-xs text-muted-foreground">{form.message.length}/1000</div>
                </div>

                {mode === "complaint" && (
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Attach photos <span className="text-muted-foreground">(optional, up to 4 · 5 MB each)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {images.map((img, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden rounded-lg border border-border">
                          <img src={img.preview} alt={`Attachment ${i + 1}`} className="h-full w-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeImage(i)}
                            aria-label="Remove image"
                            className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white hover:bg-black/80"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                      {images.length < 4 && (
                        <button
                          type="button"
                          onClick={() => fileInput.current?.click()}
                          className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-secondary/40 text-xs font-medium text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
                        >
                          <Upload className="h-5 w-5" />
                          Upload photo
                        </button>
                      )}
                    </div>
                    <input
                      ref={fileInput}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={onFiles}
                      className="hidden"
                    />
                  </div>
                )}

                {status && (
                  <div className={`flex items-start gap-2 rounded-lg border p-3 text-sm ${status.ok ? "border-primary/30 bg-primary/5 text-primary" : "border-destructive/30 bg-destructive/5 text-destructive"}`}>
                    {status.ok ? <CheckCircle2 className="mt-0.5 h-4 w-4" /> : <AlertTriangle className="mt-0.5 h-4 w-4" />}
                    <span>{status.msg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-elegant transition-smooth hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  {mode === "contact" ? "Send message" : "Submit complaint"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Find us in Akola</h2>
          <p className="mt-1 text-sm text-muted-foreground">Drop by our office — we'd love to say hello.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="Akola Telecom office location"
            src="https://www.google.com/maps?q=Akola,Maharashtra,India&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", maxLength }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; maxLength?: number }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}

function Select({ label, value, onChange, children }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/40"
      >
        {children}
      </select>
    </div>
  );
}

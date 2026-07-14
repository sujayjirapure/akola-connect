import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertTriangle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Complaints — Akola Telecom & IP Networks" },
      { name: "description", content: "Get in touch with Akola Telecom for new connections, inquiries, or to file a service complaint." },
    ],
  }),
  component: Contact,
});

type Status = { ok: boolean; msg: string } | null;

function Contact() {
  const [mode, setMode] = useState<"contact" | "complaint">("contact");
  const [status, setStatus] = useState<Status>(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
    accountId: "", issueType: "internet-down", priority: "normal",
  });

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

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
    console.log("[form submit]", { mode, ...form });
    setStatus({
      ok: true,
      msg: mode === "contact"
        ? "Thanks! We'll get back to you within 1 business day."
        : "Complaint received. Our support team will contact you shortly with a ticket ID.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "", accountId: "", issueType: "internet-down", priority: "normal" });
  };

  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Let's talk</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Whether you want a new connection or need to report a service issue —
            we're here and we respond fast.
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
    </>
  );
}

function Field({ label, value, onChange, type = "text", maxLength }) {
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

function Select({ label, value, onChange, children }) {
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

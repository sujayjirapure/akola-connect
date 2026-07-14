import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wifi, Network, Camera, Cpu, Server, ShieldCheck, Zap, Clock, Users, Star } from "lucide-react";
import heroImg from "../assets/hero-broadband.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akola Telecom — High-Speed Broadband & IT Solutions in Akola" },
      { name: "description", content: "Get lightning-fast fiber broadband, networking, CCTV and ERP/CRM software from Akola's most trusted telecom partner." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Wifi, title: "Broadband Internet", desc: "Fiber-to-the-home plans up to 1 Gbps with 99.9% uptime.", to: "/services/broadband", featured: true },
  { icon: Network, title: "Networking Solutions", desc: "Structured cabling, Wi-Fi, LAN/WAN for offices & campuses.", to: "/services/networking" },
  { icon: Camera, title: "CCTV & Surveillance", desc: "HD & 4K camera systems with remote monitoring.", to: "/services/cctv" },
  { icon: Cpu, title: "IT Solutions", desc: "Custom ERP, CRM & business software development.", to: "/services/it-solutions" },
  { icon: Server, title: "Leased Line & ISP", desc: "Dedicated symmetric bandwidth for enterprises.", to: "/services/leased-line" },
];

const stats = [
  { value: "20+", label: "Years of service" },
  { value: "15K+", label: "Happy customers" },
  { value: "99.9%", label: "Network uptime" },
  { value: "24/7", label: "Local support" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" width={1024} height={1024} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/70 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28 lg:py-36">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Zap className="h-3.5 w-3.5" /> Akola's fastest fiber network
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Internet that keeps up with <span className="text-accent">everything you do.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-90">
              High-speed broadband, enterprise networking, CCTV and custom IT solutions —
              built and supported by Akola's own team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services/broadband" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-elegant transition-smooth hover:opacity-90">
                See broadband plans <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition-smooth hover:bg-white/20">
                Talk to us
              </Link>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">One partner. Every connection.</h2>
          <p className="mt-3 text-muted-foreground">From homes to enterprises, we design, deploy and support it all.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant ${s.featured ? "lg:col-span-2 lg:row-span-1" : ""}`}
            >
              {s.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                  Flagship
                </span>
              )}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Rock-solid reliability", desc: "Redundant links and monitored 24/7 from our Akola NOC." },
              { icon: Clock, title: "Local support that shows up", desc: "On-ground engineers across Akola for same-day service." },
              { icon: Users, title: "Trusted since 2004", desc: "Two decades of connecting homes, offices and campuses." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-card p-6 shadow-card">
                <b.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Loved by Akola</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Rohan P.", role: "Home user", quote: "Switched to their fiber plan — buffering is a distant memory." },
            { name: "Sneha D.", role: "Business owner", quote: "Their leased line and CCTV combo secured our whole shop." },
            { name: "Amit K.", role: "IT Manager", quote: "The team built our custom CRM and still maintains it flawlessly." },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm text-foreground">"{t.quote}"</p>
              <div className="mt-4 text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center text-primary-foreground shadow-elegant md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready for a better connection?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">Get in touch and we'll recommend the right plan or solution for you.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact" className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-smooth hover:opacity-90">Contact us</Link>
            <Link to="/services/broadband" className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition-smooth hover:bg-white/20">View plans</Link>
          </div>
        </div>
      </section>
    </>
  );
}

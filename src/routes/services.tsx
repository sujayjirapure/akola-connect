import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { Wifi, Network, Camera, Cpu, Server, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Akola Telecom & IP Networks" },
      { name: "description", content: "Broadband, networking, CCTV, IT solutions and leased line services in Akola." },
    ],
  }),
  component: ServicesLayout,
});

const items = [
  { icon: Wifi, title: "Broadband Internet", desc: "Fiber-to-the-home plans up to 1 Gbps.", to: "/services/broadband" },
  { icon: Network, title: "Networking Solutions", desc: "LAN, WAN, Wi-Fi & structured cabling.", to: "/services/networking" },
  { icon: Camera, title: "CCTV & Surveillance", desc: "HD/4K camera systems with remote access.", to: "/services/cctv" },
  { icon: Cpu, title: "IT Solutions", desc: "ERP, CRM & custom software development.", to: "/services/it-solutions" },
  { icon: Server, title: "Leased Line & ISP", desc: "Dedicated enterprise connectivity.", to: "/services/leased-line" },
];

function ServicesLayout() {
  const matchRoute = useMatchRoute();
  const isIndex = matchRoute({ to: "/services", fuzzy: false });
  if (isIndex) return <ServicesIndex />;
  return <Outlet />;
}

function ServicesIndex() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Our services</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Everything you need to connect, secure and run your home or business.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Link key={s.to} to={s.to} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

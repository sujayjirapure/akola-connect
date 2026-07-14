import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Akola Telecom & IP Networks" },
      { name: "description", content: "Serving Akola since 2004 with broadband, networking, CCTV and IT solutions. Learn about our story, mission and team." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Connecting Akola since 2004</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            We started as a small local ISP and have grown into Akola's go-to partner for
            broadband, enterprise networking, security systems and business software.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
        {[
          { icon: Target, title: "Our mission", body: "Bring world-class connectivity and IT infrastructure to every home and business in Akola." },
          { icon: Eye, title: "Our vision", body: "Be the region's most trusted digital partner — from the last mile to the ERP system." },
          { icon: Award, title: "Our promise", body: "Fast, honest service backed by engineers who actually live and work here." },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <c.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold">Why customers stay with us</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Local NOC with 24/7 monitoring",
              "Fiber backbone across Akola",
              "Same-day on-site support",
              "One team for internet, cameras & software",
              "Transparent pricing, no hidden fees",
              "20+ years of proven track record",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

// Reusable service page layout. Feed it any service data.
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";

type Feature = { title: string; desc: string };
type Plan = { name: string; price: string; period: string; perks: string[]; featured?: boolean };
type Props = { eyebrow: string; title: string; tagline: string; features: Feature[]; plans?: Plan[]; ctaText?: string };

export default function ServiceLayout({ eyebrow, title, tagline, features, plans, ctaText = "Get this service" }: Props) {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">{eyebrow}</span>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{tagline}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-elegant transition-smooth hover:opacity-90">
            {ctaText} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl font-bold">What's included</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-card">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="font-semibold text-foreground">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {plans && plans.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-center font-display text-3xl font-bold">Plans & pricing</h2>
            <p className="mt-2 text-center text-muted-foreground">Choose the plan that fits your needs.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {plans.map((p) => (
                <div key={p.name} className={`relative rounded-2xl border p-6 shadow-card ${p.featured ? "border-primary bg-card shadow-elegant" : "border-border bg-card"}`}>
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</span>
                  )}
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{p.name}</div>
                  <div className="mt-3 font-display text-4xl font-bold text-foreground">{p.price}</div>
                  <div className="text-xs text-muted-foreground">{p.period}</div>
                  <ul className="mt-5 space-y-2 text-sm text-foreground">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {perk}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-smooth ${p.featured ? "bg-gradient-brand text-primary-foreground hover:opacity-90" : "border border-border text-foreground hover:bg-secondary"}`}>
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

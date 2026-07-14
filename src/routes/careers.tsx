import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Akola Telecom & IP Networks" },
      { name: "description", content: "Open roles at Akola Telecom & IP Networks: field engineers, network technicians, sales, IT support and CCTV installers." },
    ],
  }),
  component: Careers,
});

// Edit this list to add / remove job openings.
const jobs = [
  { title: "Field Network Engineer", type: "Full-time", location: "Akola", desc: "Install and maintain fiber broadband and networking equipment at customer sites." },
  { title: "CCTV Installation Technician", type: "Full-time", location: "Akola", desc: "Install, configure and service CCTV camera systems for homes and businesses." },
  { title: "Software Developer (ERP/CRM)", type: "Full-time", location: "Akola / Remote", desc: "Build and customize business software modules for our clients." },
  { title: "Sales & Business Development Executive", type: "Full-time", location: "Akola", desc: "Drive new broadband and enterprise sales across Akola region." },
  { title: "Customer Support Executive", type: "Full-time", location: "Akola", desc: "Handle customer queries, troubleshoot issues and coordinate service visits." },
];

function Careers() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">We're hiring</span>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Build Akola's digital backbone with us</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Join a local team doing meaningful work — connecting homes, securing businesses,
            and building software that runs on the ground here in Akola.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl font-bold">Open positions</h2>
        <div className="mt-8 space-y-4">
          {jobs.map((j) => (
            <div key={j.title} className="group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:shadow-elegant md:flex-row md:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold">{j.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{j.desc}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {j.type}</span>
                </div>
              </div>
              <a
                href={`mailto:careers@akolatelecom.com?subject=Application: ${encodeURIComponent(j.title)}`}
                className="inline-flex items-center gap-2 self-start rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:opacity-90 md:self-auto"
              >
                Apply <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <Mail className="mx-auto h-8 w-8 text-primary" />
          <h3 className="mt-3 font-display text-xl font-semibold">Don't see your role?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Send us your resume — we're always looking for great people.</p>
          <a href="mailto:careers@akolatelecom.com" className="mt-4 inline-flex rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:bg-secondary">
            careers@akolatelecom.com
          </a>
        </div>
      </section>
    </>
  );
}

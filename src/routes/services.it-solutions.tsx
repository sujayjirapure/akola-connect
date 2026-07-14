import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "../components/site/ServiceLayout.jsx";

export const Route = createFileRoute("/services/it-solutions")({
  head: () => ({
    meta: [
      { title: "IT Solutions — ERP, CRM & Custom Software — Akola Telecom" },
      { name: "description", content: "Custom ERP, CRM and business software development, plus IT support and hardware for Akola businesses." },
    ],
  }),
  component: () => (
    <ServiceLayout
      eyebrow="Software & IT"
      title="Software that fits how you actually work"
      tagline="From ready-made ERP/CRM to fully customized business software, we build and support the tools you run on."
      features={[
        { title: "ERP customization", desc: "Inventory, billing, accounting, HR — tailored modules." },
        { title: "CRM systems", desc: "Sales pipelines, customer records and support ticketing." },
        { title: "Custom software", desc: "Bespoke web and mobile apps for your workflows." },
        { title: "IT AMC & support", desc: "Annual maintenance for PCs, printers, servers and networks." },
      ]}
      plans={[]}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "../components/site/ServiceLayout.jsx";

export const Route = createFileRoute("/services/leased-line")({
  head: () => ({
    meta: [
      { title: "Leased Line & ISP Services — Akola Telecom" },
      { name: "description", content: "Dedicated symmetric internet leased lines with SLA for enterprises in Akola." },
    ],
  }),
  component: () => (
    <ServiceLayout
      eyebrow="Enterprise connectivity"
      title="Dedicated bandwidth, guaranteed"
      tagline="Symmetric leased lines with SLA-backed uptime and dedicated support for critical business operations."
      features={[
        { title: "Symmetric speeds", desc: "Equal upload and download for VoIP, cloud and backups." },
        { title: "SLA guarantee", desc: "99.9%+ uptime with committed response times." },
        { title: "Static IPs", desc: "Public IPs for hosting, VPN and remote access." },
        { title: "Dedicated manager", desc: "A named account manager for your business." },
      ]}
      plans={[]}
    />
  ),
});

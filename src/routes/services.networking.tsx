import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "../components/site/ServiceLayout.jsx";

export const Route = createFileRoute("/services/networking")({
  head: () => ({
    meta: [
      { title: "Networking Solutions — Akola Telecom" },
      { name: "description", content: "Enterprise LAN, WAN, Wi-Fi and structured cabling for offices, campuses and factories." },
    ],
  }),
  component: () => (
    <ServiceLayout
      eyebrow="Enterprise networking"
      title="Networks that don't slow you down"
      tagline="Design, deployment and maintenance of business networks — small offices to multi-floor campuses."
      features={[
        { title: "Structured cabling", desc: "Cat6/Cat6A and fiber backbone installations." },
        { title: "Managed Wi-Fi", desc: "High-density access points with a single controller." },
        { title: "Firewall & VPN", desc: "Site-to-site VPN, next-gen firewalls, secure remote access." },
        { title: "Network audits", desc: "Health checks, topology mapping and optimization." },
      ]}
      plans={[]}
    />
  ),
});

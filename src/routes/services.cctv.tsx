import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "../components/site/ServiceLayout";

export const Route = createFileRoute("/services/cctv")({
  head: () => ({
    meta: [
      { title: "CCTV & Surveillance — Akola Telecom" },
      { name: "description", content: "HD & 4K CCTV camera installation and monitoring for homes, shops and businesses in Akola." },
    ],
  }),
  component: () => (
    <ServiceLayout
      eyebrow="Security systems"
      title="See everything, everywhere"
      tagline="Professional CCTV design and installation with mobile app monitoring and cloud backups."
      features={[
        { title: "HD & 4K cameras", desc: "IP, PTZ, dome and bullet cameras from top brands." },
        { title: "Mobile monitoring", desc: "Watch your feeds live from your phone anywhere." },
        { title: "Night vision", desc: "Color night vision and IR options for 24/7 coverage." },
        { title: "Cloud backup", desc: "Offsite storage so footage is safe even if the DVR isn't." },
      ]}
      plans={[]}
    />
  ),
});

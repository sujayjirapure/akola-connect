import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "../components/site/ServiceLayout";

export const Route = createFileRoute("/services/broadband")({
  head: () => ({
    meta: [
      { title: "Broadband Internet Plans — Akola Telecom" },
      { name: "description", content: "Fiber broadband plans up to 1 Gbps with unlimited data and 99.9% uptime in Akola." },
    ],
  }),
  component: () => (
    <ServiceLayout
      eyebrow="Flagship service"
      title="Fiber broadband, built for real speed"
      tagline="Symmetric fiber plans with unlimited data, low latency and 24/7 local support."
      ctaText="Get connected"
      features={[
        { title: "Fiber-to-the-home", desc: "Pure fiber straight to your router — no copper bottlenecks." },
        { title: "99.9% uptime", desc: "Redundant links monitored round-the-clock from our Akola NOC." },
        { title: "Unlimited data", desc: "Stream, game, work — no fair-usage speed drops." },
        { title: "Free installation", desc: "Same-week setup by our own field engineers." },
      ]}
      plans={[
        { name: "Home Starter", price: "₹499", period: "/ month", perks: ["100 Mbps", "Unlimited data", "Free router", "24/7 support"] },
        { name: "Home Pro", price: "₹799", period: "/ month", featured: true, perks: ["300 Mbps", "Unlimited data", "Free OTT bundle", "Priority support"] },
        { name: "Business", price: "₹1,499", period: "/ month", perks: ["1 Gbps symmetric", "Static IP available", "SLA-backed", "Dedicated manager"] },
      ]}
    />
  ),
});

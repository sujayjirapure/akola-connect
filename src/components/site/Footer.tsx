// Footer.jsx — edit company details / socials here.
import { Link } from "@tanstack/react-router";
import { Wifi, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">
                <Wifi className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="font-display font-bold">Akola Telecom</div>
            </div>
            <p className="mt-4 text-sm opacity-80">
              Trusted broadband, networking and IT partner in Akola since 2004.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services/broadband" className="hover:opacity-100">Broadband</Link></li>
              <li><Link to="/services/networking" className="hover:opacity-100">Networking</Link></li>
              <li><Link to="/services/cctv" className="hover:opacity-100">CCTV</Link></li>
              <li><Link to="/services/it-solutions" className="hover:opacity-100">IT Solutions</Link></li>
              <li><Link to="/services/leased-line" className="hover:opacity-100">Leased Line</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100">About</Link></li>
              <li><Link to="/careers" className="hover:opacity-100">Careers</Link></li>
              <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Reach us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Akola, Maharashtra, India</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@akolatelecom.com</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Facebook" className="rounded-md bg-white/10 p-2 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="rounded-md bg-white/10 p-2 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-md bg-white/10 p-2 hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Akola Telecom & IP Networks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

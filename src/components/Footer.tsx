import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-[#0A0A0A] border-t border-border">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <Link to="/">
            <Logo height={32} />
          </Link>
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
            Premium restoration &amp; remediation services for the Washington DC metropolitan area. Est. 2003.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="label-text text-primary mb-6">Navigation</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Discretion", to: "/discretion" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="label-text text-primary mb-6">Contact</h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>McLean, Great Falls, Potomac &amp; Greater Washington, DC</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:5713443837" className="hover:text-primary transition-colors">(571) 344-3837</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:hello@salemsteamer.com" className="hover:text-primary transition-colors">hello@salemsteamer.com</a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="label-text text-primary mb-6">Hours</h4>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Monday–Friday 8:00 AM–6:00 PM</p>
            <p>Emergency Services: 24/7/365</p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-block border border-primary text-primary px-5 py-2 label-text hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © 2003–2026 Salem Steamer. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          IICRC Certified · Fully Licensed · Fully Insured
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

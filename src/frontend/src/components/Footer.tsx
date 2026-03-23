import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  Shield,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              HealthPedia
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Your trusted source for reliable health information. Empowering
            people to make informed decisions about their wellbeing.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary-foreground/60">
            About
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Contact Us",
              "Our Team",
              "Privacy Policy",
              "Terms of Use",
              "Disclaimer",
            ].map((item) => (
              <li key={item}>
                <span className="text-primary-foreground/70 cursor-pointer hover:text-primary-foreground transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary-foreground/60">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/diseases"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Diseases A-Z
              </Link>
            </li>
            <li>
              <Link
                to="/category/$type"
                params={{ type: "common" }}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Common Diseases
              </Link>
            </li>
            <li>
              <Link
                to="/category/$type"
                params={{ type: "serious" }}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Serious &amp; Rare
              </Link>
            </li>
            <li>
              <span className="text-primary-foreground/70 cursor-pointer hover:text-primary-foreground transition-colors">
                Symptom Checker
              </span>
            </li>
            <li>
              <span className="text-primary-foreground/70 cursor-pointer hover:text-primary-foreground transition-colors">
                Vaccines Guide
              </span>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary-foreground/60">
            Connect
          </h3>
          <div className="flex gap-3 mb-5">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/60 mb-2">
            Subscribe for health updates:
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="h-8 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/40 flex-1"
            />
            <Button
              type="button"
              size="icon"
              className="h-8 w-8 bg-primary hover:bg-primary/90 shrink-0"
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50">
          <span>© {year} HealthPedia. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/80 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

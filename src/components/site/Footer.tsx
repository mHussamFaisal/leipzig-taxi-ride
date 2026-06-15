import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoAsset from "@/assets/leipzig-taxi-logo.asset.json";
import { ADDRESS, EMAIL, PHONE, SERVICES } from "./constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Leipzig Taxi Nr. 1"
              width={48}
              height={48}
              className="h-12 w-12 rounded-md bg-white/95 object-contain p-1"
            />
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Leipzig</div>
              <div className="font-display text-lg font-semibold">Taxi Nr. 1</div>
            </div>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Your trusted taxi service in Leipzig. Safety, comfort, punctuality and
            professionalism on every ride — day and night.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Instagram].map((I, k) => (
              <a
                key={k}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-foreground/80 transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {ADDRESS}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> {PHONE}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> {EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> 24 / 7
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Leipzig Taxi Nr. 1 — All rights reserved.</p>
          <p>Made with care in Leipzig.</p>
        </div>
      </div>
    </footer>
  );
}

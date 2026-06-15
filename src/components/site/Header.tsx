import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import logoAsset from "@/assets/leipzig-taxi-logo.asset.json";
import { NAV_LINKS, PHONE, PHONE_TEL } from "./constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Leipzig Taxi Nr. 1 logo"
            width={56}
            height={56}
            className="h-12 w-12 rounded-md bg-white/95 object-contain p-1 shadow-lg shadow-black/40"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Leipzig</span>
            <span className="font-display text-lg font-semibold">Taxi Nr. 1</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-primary-foreground md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <Link
            to="/booking"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-all hover:scale-[1.03] hover:shadow-gold/40 sm:inline-block"
          >
            Book Now
          </Link>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${open ? "max-h-[28rem]" : "max-h-0"} overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/90 hover:bg-muted"
            >
              {l.label}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </nav>
      </div>
    </header>
  );
}

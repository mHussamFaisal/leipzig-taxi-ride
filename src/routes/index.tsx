import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Shield,
  Star,
  CheckCircle2,
  Award,
  ArrowRight,
  Quote,
  Moon,
  Home as HomeIcon,
  Car,
  Plane,
} from "lucide-react";

import heroImg from "@/assets/hero-taxi.jpg";
import chauffeurImg from "@/assets/about-chauffeur.jpg";
import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetVan from "@/assets/fleet-van.jpg";
import fleetLuxury from "@/assets/fleet-luxury.jpg";

import { SiteShell } from "@/components/site/SiteShell";
import { PHONE, PHONE_TEL, SERVICES } from "@/components/site/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leipzig Taxi Nr. 1 – Premium Taxi & Chauffeur Service in Leipzig" },
      {
        name: "description",
        content:
          "Leipzig's #1 trusted taxi. Frauen-Nacht-Taxi, Drive Me Home, airport transfers & 24/7 city rides. Book by phone, WhatsApp or online.",
      },
      { property: "og:title", content: "Leipzig Taxi Nr. 1 – Premium Taxi in Leipzig" },
      {
        property: "og:description",
        content: "Safety, comfort, punctuality and professionalism on every ride in Leipzig.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Leipzig Taxi Nr. 1",
          areaServed: "Leipzig, Germany",
          telephone: PHONE,
          url: "/",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Augustusplatz 1",
            addressLocality: "Leipzig",
            postalCode: "04109",
            addressCountry: "DE",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "320",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const SERVICE_ICONS: Record<string, typeof Moon> = {
  "frauen-nacht-taxi": Moon,
  "drive-me-home": HomeIcon,
  "standard-taxi": Car,
  "airport-transfer": Plane,
};

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <ServicesTeaser />
      <FleetTeaser />
      <Testimonials />
      <CallToAction />
    </SiteShell>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${y * 0.25}px, 0) scale(1.08)` }}
      >
        <img
          src={heroImg}
          alt="Black taxi in Leipzig at night with wet streets"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pt-32 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Available 24 / 7 in Leipzig
          </div>

          <h1 className="reveal font-display text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Leipzig's <span className="gold-gradient-text">trusted</span>
            <br />
            taxi service.
          </h1>

          <p className="reveal mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Safety, comfort, punctuality and professionalism on every ride. From
            late-night Frauen-Nacht-Taxi to our exclusive Drive-Me-Home service —
            we get you where you need to be.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-gold/25 transition-all hover:scale-[1.03] hover:shadow-gold/50"
            >
              Book Your Ride
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-background/60 px-6 py-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-gold/50 hover:text-gold"
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gold/15">
                <Phone className="h-4 w-4 text-gold" />
                <span className="pulse-ring absolute inset-0 rounded-full" />
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Call us anytime
                </span>
                <span>{PHONE}</span>
              </span>
            </a>
          </div>

          <dl className="reveal mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { v: "24/7", l: "Service" },
              { v: "15+", l: "Years experience" },
              { v: "4.9★", l: "Rated by riders" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Frauen-Nacht-Taxi",
    "Drive Me Home",
    "Airport Transfer",
    "City Rides",
    "Business Class",
    "24/7 Dispatch",
    "Fixed Rates",
    "Licensed Drivers",
  ];
  return (
    <div className="border-y border-border bg-card/40">
      <div className="flex overflow-hidden py-5">
        <div className="flex shrink-0 animate-marquee gap-12 pr-12">
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutTeaser() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={chauffeurImg}
              alt="Professional Leipzig Taxi chauffeur at night"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-xl border border-border bg-card p-5 shadow-2xl shadow-black/40 backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-gold" />
              <div>
                <div className="font-display text-2xl font-semibold">15+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Years driving Leipzig
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold">About us</p>
          <h2 className="reveal mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            More than a ride —
            <br />
            <span className="gold-gradient-text">a promise of safety.</span>
          </h2>
          <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground">
            Leipzig Taxi Nr. 1 has been part of the city's nightlife, business
            commute and everyday journeys for over a decade. A driver you trust,
            a car that's spotless, a price you know before you step in.
          </p>

          <ul className="reveal mt-8 space-y-4">
            {[
              "Vetted, licensed professional drivers",
              "Real-time dispatch and GPS-tracked vehicles",
              "Transparent, fixed pricing — no surprises",
              "Female drivers available on request",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="reveal mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesTeaser() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Services</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Tailored for <span className="gold-gradient-text">every journey</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Signature services, one standard of excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Car;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/5 blur-2xl transition-all duration-700 group-hover:bg-gold/20" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.25em] text-gold/80">
                    {s.tag}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-gold">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FleetTeaser() {
  const cars = [
    { img: fleetSedan, name: "Business Sedan", sub: "Mercedes E-Class · up to 4" },
    { img: fleetLuxury, name: "First Class", sub: "Mercedes S-Class · executive" },
    { img: fleetVan, name: "Group Van", sub: "Mercedes V-Class · up to 7" },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our fleet</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              A car for <span className="gold-gradient-text">every occasion.</span>
            </h2>
          </div>
          <Link
            to="/fleet"
            className="text-sm font-semibold text-gold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            View full fleet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cars.map((c, i) => (
            <article
              key={c.name}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.name} – ${c.sub}`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-border p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Anna K.",
      role: "Leipzig",
      text: "I use the Frauen-Nacht-Taxi every weekend. The female driver option made me feel completely safe.",
    },
    {
      name: "Markus B.",
      role: "Business traveller",
      text: "Booked the S-Class for an airport transfer. On time to the minute, spotless car, professional driver.",
    },
    {
      name: "Sophie L.",
      role: "Leipzig",
      text: "Drive Me Home saved my evening — brought me AND my car home safely. Worth every euro.",
    },
    {
      name: "Daniel W.",
      role: "Regular customer",
      text: "Five years of riding with Leipzig Taxi Nr. 1. Never late, always friendly. They set the standard.",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, [reviews.length]);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
        <h2 className="reveal mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Trusted by <span className="gold-gradient-text">Leipzig.</span>
        </h2>

        <div className="reveal relative mt-14 overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14">
          <Quote className="mx-auto h-10 w-10 text-gold/70" />
          <div className="relative mt-8 min-h-[180px]">
            {reviews.map((r, idx) => (
              <blockquote
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ${
                  idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <p className="font-display text-xl italic leading-relaxed sm:text-2xl">
                  “{r.text}”
                </p>
                <footer className="mt-8">
                  <div className="flex items-center justify-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-3 text-sm font-semibold">{r.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {r.role}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show review ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gold" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
        <Shield className="mx-auto h-10 w-10 text-gold" />
        <h2 className="reveal mt-5 font-display text-3xl font-semibold sm:text-5xl">
          Ready when <span className="gold-gradient-text">you are.</span>
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-muted-foreground">
          One call, one tap — a Leipzig Taxi Nr. 1 driver is on the way.
        </p>
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/30 hover:scale-[1.03] transition-transform"
          >
            Book online <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold hover:border-gold/50 hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

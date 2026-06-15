import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  Shield,
  Clock,
  Star,
  MapPin,
  Mail,
  Menu,
  X,
  Car,
  Moon,
  Home,
  ChevronRight,
  Award,
  CheckCircle2,
  Quote,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

import logoAsset from "@/assets/leipzig-taxi-logo.asset.json";
import heroImg from "@/assets/hero-taxi.jpg";
import chauffeurImg from "@/assets/about-chauffeur.jpg";
import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetVan from "@/assets/fleet-van.jpg";
import fleetLuxury from "@/assets/fleet-luxury.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leipzig Taxi Nr. 1 – Premium Taxi & Chauffeur Service in Leipzig" },
      {
        name: "description",
        content:
          "Leipzig's trusted taxi service. Frauen-Nacht-Taxi, Drive Me Home and reliable rides 24/7. Book by phone, WhatsApp or online.",
      },
      { property: "og:title", content: "Leipzig Taxi Nr. 1 – Premium Taxi in Leipzig" },
      {
        property: "og:description",
        content: "Safety, comfort, punctuality and professionalism on every ride in Leipzig.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const PHONE = "+49 341 1234567";
const PHONE_TEL = "+493411234567";
const WHATSAPP = "+493411234567";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Fleet />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#fleet", label: "Fleet" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
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
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
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
          <a
            href="#booking"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-all hover:scale-[1.03] hover:shadow-gold/40 sm:inline-block"
          >
            Book Now
          </a>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "max-h-96" : "max-h-0"} overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/90 hover:bg-muted"
            >
              {l.label}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </a>
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

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
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

          <h1 className="reveal font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]">
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
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-gold/25 transition-all hover:scale-[1.03] hover:shadow-gold/50"
            >
              Book Your Ride
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
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

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block">
        <span className="inline-block animate-bounce">Scroll</span>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
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

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={chauffeurImg}
              alt="Professional Leipzig Taxi chauffeur opening the door at night"
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
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold">
            About us
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            More than a ride —
            <br />
            <span className="gold-gradient-text">a promise of safety.</span>
          </h2>
          <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground">
            Leipzig Taxi Nr. 1 has been part of the city's nightlife, business
            commute and everyday journeys for over a decade. We built our name on
            three simple things: a driver you can trust, a car that is always
            spotless, and a price you know before you step in.
          </p>

          <ul className="reveal mt-8 space-y-4">
            {[
              "Vetted, licensed professional drivers",
              "Real-time dispatch and GPS-tracked vehicles",
              "Transparent, fixed pricing — no surprises",
              "Female drivers available on request",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="reveal mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
          >
            Explore our services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    {
      icon: Moon,
      title: "Frauen-Nacht-Taxi",
      desc: "Discreet, safe rides for women travelling alone after dark. Pre-arranged female drivers available on request.",
      tag: "Safety first",
    },
    {
      icon: Home,
      title: "Drive Me Home",
      desc: "Had a glass too many? Our professional drivers bring you AND your car safely back home.",
      tag: "Your car, our wheel",
    },
    {
      icon: Car,
      title: "Standard Taxi Rides",
      desc: "Reliable, fast and comfortable transport across Leipzig and to any destination, day or night.",
      tag: "Always on time",
    },
  ];
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Services</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Tailored for <span className="gold-gradient-text">every journey</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Three signature services, one standard of excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/5 blur-2xl transition-all duration-700 group-hover:bg-gold/20" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.25em] text-gold/80">
                  {s.tag}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-gold"
                >
                  Book this service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Fleet ---------------- */
function Fleet() {
  const cars = [
    { img: fleetSedan, name: "Business Sedan", sub: "Mercedes E-Class · up to 4 passengers" },
    { img: fleetLuxury, name: "First Class", sub: "Mercedes S-Class · executive comfort" },
    { img: fleetVan, name: "Group Van", sub: "Mercedes V-Class · up to 7 passengers" },
  ];
  return (
    <section id="fleet" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our fleet</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              A car for <span className="gold-gradient-text">every occasion.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Every vehicle in our fleet is hand-picked, regularly serviced and
            kept spotless — because the ride matters as much as the destination.
          </p>
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

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    {
      name: "Anna K.",
      role: "Leipzig",
      text: "I use the Frauen-Nacht-Taxi every weekend after work. The female driver option made me feel completely safe. Absolutely recommend.",
    },
    {
      name: "Markus B.",
      role: "Business traveller",
      text: "Booked the S-Class for an airport transfer. On time to the minute, spotless car and a professional driver. Exactly what I needed.",
    },
    {
      name: "Sophie L.",
      role: "Leipzig",
      text: "Drive Me Home saved my evening — they brought me AND my car home safely after a friend's birthday. Worth every euro.",
    },
    {
      name: "Daniel W.",
      role: "Regular customer",
      text: "Five years of riding with Leipzig Taxi Nr. 1. Never late, always friendly. They simply set the standard in the city.",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, [reviews.length]);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
        <h2 className="reveal mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Trusted by <span className="gold-gradient-text">Leipzig.</span>
        </h2>

        <div className="reveal relative mt-14 overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14">
          <Quote className="mx-auto h-10 w-10 text-gold/70" />
          <div className="relative mt-8 min-h-[160px]">
            {reviews.map((r, idx) => (
              <blockquote
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ${
                  idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <p className="font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
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

/* ---------------- Booking ---------------- */
function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="booking" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold">Book a ride</p>
          <h2 className="reveal mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Three ways to <span className="gold-gradient-text">reach us.</span>
          </h2>
          <p className="reveal mt-5 text-muted-foreground">
            Pick the channel that suits you — we answer within seconds, 24 hours a
            day, 7 days a week.
          </p>

          <div className="reveal mt-10 space-y-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30 group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Call dispatch
                </div>
                <div className="truncate font-semibold">{PHONE}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold" />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30 group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </div>
                <div className="truncate font-semibold">Chat with our dispatcher</div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold" />
            </a>

            <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Average response
                </div>
                <div className="font-semibold">Under 60 seconds · 24/7</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="reveal rounded-3xl border border-border bg-card p-7 sm:p-10"
        >
          <h3 className="font-display text-2xl font-semibold">Online booking</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us where and when — we confirm by phone within minutes.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Anna Schmidt" />
            <Field label="Phone" name="phone" type="tel" placeholder="+49 …" />
            <Field label="Pickup" name="from" placeholder="Hauptbahnhof Leipzig" full />
            <Field label="Destination" name="to" placeholder="Leipzig/Halle Airport" full />
            <Field label="Date" name="date" type="date" />
            <Field label="Time" name="time" type="time" />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Service
              </label>
              <select
                name="service"
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30"
              >
                <option>Standard taxi ride</option>
                <option>Frauen-Nacht-Taxi</option>
                <option>Drive Me Home</option>
                <option>Airport transfer</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-all hover:scale-[1.01] hover:shadow-gold/50"
          >
            {sent ? "Request received — we'll call you back" : "Request a ride"}
            {!sent && <ArrowRight className="h-4 w-4" />}
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            By submitting you agree to be contacted about your booking.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  full,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label
        htmlFor={name}
        className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const items = [
    { icon: MapPin, label: "Address", value: "Augustusplatz 1, 04109 Leipzig, Germany" },
    { icon: Phone, label: "Phone", value: PHONE },
    { icon: Mail, label: "Email", value: "dispatch@leipzigtaxi-nr1.de" },
    { icon: Clock, label: "Hours", value: "24 hours · 7 days a week" },
  ];
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Find us in <span className="gold-gradient-text">the heart of Leipzig.</span>
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-5">
          <div className="lg:col-span-2 p-8 sm:p-10">
            <ul className="space-y-6">
              {items.map((it) => (
                <li key={it.label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="mt-1 font-medium text-foreground">{it.value}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="hairline my-8" />

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-gold/50 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden lg:col-span-3">
            <iframe
              title="Leipzig map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=12.354%2C51.330%2C12.404%2C51.350&layer=mapnik&marker=51.340%2C12.379"
              className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
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
          </div>
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
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Quick links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Fleet", "#fleet"],
              ["Reviews", "#testimonials"],
              ["Book a ride", "#booking"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-foreground/80 transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Get in touch
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" /> {PHONE}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" /> dispatch@leipzigtaxi-nr1.de
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" /> Augustusplatz 1, 04109 Leipzig
            </li>
            <li className="flex items-start gap-2">
              <Shield className="mt-0.5 h-4 w-4 text-gold" /> Licensed · Insured · GDPR
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <div>© {new Date().getFullYear()} Leipzig Taxi Nr. 1. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Impressum</a>
            <a href="#" className="hover:text-gold">Datenschutz</a>
            <a href="#" className="hover:text-gold">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating call button ---------------- */
function FloatingCall() {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      aria-label="Call Leipzig Taxi Nr. 1"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-2xl shadow-gold/40 transition-transform hover:scale-110 lg:hidden"
    >
      <Phone className="h-6 w-6" />
      <span className="pulse-ring absolute inset-0 rounded-full" />
    </a>
  );
}

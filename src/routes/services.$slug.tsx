import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Moon, Home as HomeIcon, Car, Plane } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { BookingForm } from "@/components/site/BookingForm";
import { SERVICES, PHONE, PHONE_TEL } from "@/components/site/constants";
import heroImg from "@/assets/hero-taxi.jpg";

const ICONS: Record<string, typeof Moon> = {
  "frauen-nacht-taxi": Moon,
  "drive-me-home": HomeIcon,
  "standard-taxi": Car,
  "airport-transfer": Plane,
};

const BENEFITS: Record<string, string[]> = {
  "frauen-nacht-taxi": [
    "Female drivers available on request",
    "Dispatcher stays on the line until you're inside",
    "Fixed, transparent night-time fares",
    "Priority pickup after 22:00",
  ],
  "drive-me-home": [
    "We come to you — bar, restaurant or event",
    "Insured chauffeurs drive your own vehicle",
    "Both you and your car arrive safely",
    "Available 24/7 across Leipzig",
  ],
  "standard-taxi": [
    "Average dispatch under 8 minutes",
    "GPS-tracked, regularly serviced vehicles",
    "Card, contactless and cash payments",
    "Fixed pricing — no surprises",
  ],
  "airport-transfer": [
    "Flight tracking for delays & early arrivals",
    "Meet & greet at arrivals with a name sign",
    "All-inclusive fixed price (LEJ, BER, DRS)",
    "Sedans and 7-seater vans available",
  ],
};

function findService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service – Leipzig Taxi Nr. 1" }] };
    const title = `${s.title} Leipzig – Book 24/7 | Leipzig Taxi Nr. 1`;
    return {
      meta: [
        { title },
        { name: "description", content: `${s.short} Book ${s.title} in Leipzig 24/7 by phone, WhatsApp or online.` },
        { property: "og:title", content: title },
        { property: "og:description", content: s.long },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:image", content: heroImg },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${s.title} – Leipzig`,
            description: s.long,
            areaServed: "Leipzig, Germany",
            provider: {
              "@type": "TaxiService",
              name: "Leipzig Taxi Nr. 1",
              telephone: PHONE,
            },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <SiteShell>
      <PageHero eyebrow="404" title="Service not found" />
    </SiteShell>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = ICONS[service.slug] ?? Car;
  const benefits = BENEFITS[service.slug] ?? [];
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <SiteShell>
      <PageHero
        eyebrow={service.tag}
        title={service.title}
        description={service.long}
      />

      <section className="py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="reveal">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/30">
              <Icon className="h-8 w-8" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
              What makes <span className="gold-gradient-text">{service.title}</span> different
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/25"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-gold/50 hover:text-gold"
              >
                Online booking <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <BookingForm defaultService={service.title} />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold">More services</p>
          <h2 className="reveal mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Other ways we move Leipzig
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => {
              const OIcon = ICONS[o.slug] ?? Car;
              return (
                <Link
                  key={o.slug}
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="reveal group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/50"
                >
                  <OIcon className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

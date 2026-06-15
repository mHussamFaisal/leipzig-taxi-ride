import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Moon, Home as HomeIcon, Car, Plane } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { SERVICES } from "@/components/site/constants";

const ICONS: Record<string, typeof Moon> = {
  "frauen-nacht-taxi": Moon,
  "drive-me-home": HomeIcon,
  "standard-taxi": Car,
  "airport-transfer": Plane,
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Taxi Services in Leipzig – Frauen-Nacht-Taxi, Airport & More" },
      {
        name: "description",
        content:
          "Explore all Leipzig Taxi Nr. 1 services: Frauen-Nacht-Taxi, Drive Me Home, standard city rides and airport transfers. Book 24/7.",
      },
      { property: "og:title", content: "Services – Leipzig Taxi Nr. 1" },
      {
        property: "og:description",
        content: "Four signature taxi services in Leipzig, one promise: safety, comfort and punctuality.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Tailored for"
        highlight="every journey."
        description="From late-night rides for women to flight-tracked airport transfers — a Leipzig Taxi Nr. 1 service for every occasion."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.slug] ?? Car;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/5 blur-2xl transition-all duration-700 group-hover:bg-gold/20" />
                <div className="relative flex flex-col h-full">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mt-6 text-[10px] uppercase tracking-[0.25em] text-gold/80">
                    {s.tag}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.long}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-gold">
                    Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}

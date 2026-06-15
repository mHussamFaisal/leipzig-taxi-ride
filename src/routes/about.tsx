import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Award, Shield, Clock, Star, ArrowRight } from "lucide-react";
import chauffeurImg from "@/assets/about-chauffeur.jpg";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Leipzig Taxi Nr. 1 – 15+ Years of Trusted Service in Leipzig" },
      {
        name: "description",
        content:
          "Meet Leipzig Taxi Nr. 1: a family-run team of vetted, licensed drivers serving Leipzig 24/7 for over 15 years. Safety, comfort and transparent fares.",
      },
      { property: "og:title", content: "About Leipzig Taxi Nr. 1" },
      {
        property: "og:description",
        content: "15+ years driving Leipzig — meet the team behind the city's most trusted taxi service.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: chauffeurImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About us"
        title="A promise of"
        highlight="safety, comfort and trust."
        description="For more than 15 years, Leipzig Taxi Nr. 1 has driven the city's nightlife, daily commutes and business travellers — with the same standard every single ride."
      />

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={chauffeurImg}
                alt="Professional Leipzig Taxi chauffeur"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-xl border border-border bg-card p-5 shadow-2xl sm:block">
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
            <h2 className="reveal font-display text-3xl font-semibold sm:text-4xl">
              Our story
            </h2>
            <p className="reveal mt-5 text-muted-foreground leading-relaxed">
              What started as a single car in 2009 has grown into Leipzig's most
              recommended taxi company. Our promise has never changed: a driver
              you can trust, a car that's spotless, and a fare you know in
              advance.
            </p>
            <p className="reveal mt-4 text-muted-foreground leading-relaxed">
              We've built dedicated services around the moments that matter
              most — late-night journeys for women, getting you (and your car)
              safely home, and flight-tracked airport transfers across Saxony.
            </p>

            <ul className="reveal mt-8 space-y-4">
              {[
                "Vetted, licensed professional drivers",
                "Real-time dispatch & GPS-tracked vehicles",
                "Transparent, fixed pricing",
                "Female drivers available on request",
                "Insured Drive-Me-Home chauffeurs",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {t}
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="reveal mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
            >
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 lg:px-8">
          {[
            { icon: Shield, title: "Safety first", body: "Every driver is background-checked and trained for night-time rides." },
            { icon: Clock, title: "Punctual, always", body: "Average dispatch under 8 minutes anywhere in Leipzig." },
            { icon: Star, title: "Rated 4.9★", body: "Hundreds of five-star reviews from regular Leipzig riders." },
          ].map((v) => (
            <article key={v.title} className="reveal rounded-2xl border border-border bg-card p-8">
              <v.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

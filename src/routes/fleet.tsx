import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Briefcase, Crown } from "lucide-react";
import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetVan from "@/assets/fleet-van.jpg";
import fleetLuxury from "@/assets/fleet-luxury.jpg";
import { SiteShell, PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet – Mercedes E-Class, S-Class & V-Class in Leipzig" },
      {
        name: "description",
        content:
          "Travel in comfort. Leipzig Taxi Nr. 1 operates a clean, modern Mercedes fleet — Business Sedan, First-Class S-Class and 7-seater V-Class van.",
      },
      { property: "og:title", content: "Fleet – Leipzig Taxi Nr. 1" },
      { property: "og:description", content: "A clean, modern Mercedes fleet for every kind of ride." },
      { property: "og:url", content: "/fleet" },
      { property: "og:image", content: fleetLuxury },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

function FleetPage() {
  const cars = [
    {
      img: fleetSedan,
      icon: Briefcase,
      name: "Business Sedan",
      model: "Mercedes E-Class",
      seats: "Up to 4 passengers",
      desc: "Our everyday workhorse — spacious, comfortable and equally at home on a school run or business meeting.",
    },
    {
      img: fleetLuxury,
      icon: Crown,
      name: "First Class",
      model: "Mercedes S-Class",
      seats: "Up to 3 passengers",
      desc: "Executive transport for VIPs, important meetings and special occasions — quiet, fast and immaculate.",
    },
    {
      img: fleetVan,
      icon: Users,
      name: "Group Van",
      model: "Mercedes V-Class",
      seats: "Up to 7 passengers",
      desc: "Generous luggage space and individual seating — perfect for families, groups and airport transfers.",
    },
  ];

  return (
    <SiteShell>
      <PageHero
        eyebrow="Our fleet"
        title="A car for"
        highlight="every occasion."
        description="Hand-picked, regularly serviced and kept spotless — because the ride matters as much as the destination."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {cars.map((c, i) => (
            <article
              key={c.name}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.name} – ${c.model}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <c.icon className="h-7 w-7 text-gold" />
                <h2 className="mt-4 font-display text-xl font-semibold">{c.name}</h2>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.model} · {c.seats}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <Link
                  to="/booking"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
                >
                  Book this car <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

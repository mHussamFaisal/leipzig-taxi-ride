import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { ADDRESS, EMAIL, PHONE, PHONE_TEL, WHATSAPP } from "@/components/site/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Leipzig Taxi Nr. 1 – Dispatch 24/7 in Leipzig" },
      {
        name: "description",
        content: `Reach Leipzig Taxi Nr. 1 by phone (${PHONE}), email or WhatsApp. Dispatch is open 24/7 and we're based at ${ADDRESS}.`,
      },
      { property: "og:title", content: "Contact – Leipzig Taxi Nr. 1" },
      { property: "og:description", content: "Phone, WhatsApp, email — we're a tap away, 24/7." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: MapPin, label: "Address", value: ADDRESS },
    { icon: Phone, label: "Phone", value: PHONE },
    { icon: Mail, label: "Email", value: EMAIL },
    { icon: Clock, label: "Hours", value: "24 hours · 7 days a week" },
  ];
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Find us in"
        highlight="the heart of Leipzig."
        description="We're a tap, a call or a message away — any hour, any day."
      />

      <section className="pb-24">
        <div className="reveal mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-5">
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
                    <div className="mt-1 font-medium">{it.value}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="relative min-h-[360px] overflow-hidden lg:col-span-3">
            <iframe
              title="Leipzig map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=12.354%2C51.330%2C12.404%2C51.350&layer=mapnik&marker=51.340%2C12.379"
              className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-110"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

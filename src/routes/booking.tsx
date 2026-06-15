import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { BookingForm } from "@/components/site/BookingForm";
import { PHONE, PHONE_TEL, WHATSAPP } from "@/components/site/constants";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Taxi in Leipzig – Online, Phone or WhatsApp | Leipzig Taxi Nr. 1" },
      {
        name: "description",
        content:
          "Book a Leipzig taxi in seconds. Online form, 24/7 dispatch line or WhatsApp — confirmed by phone within minutes.",
      },
      { property: "og:title", content: "Book a Ride – Leipzig Taxi Nr. 1" },
      { property: "og:description", content: "Three ways to reach us — we answer within seconds, 24/7." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Book a ride"
        title="Three ways to"
        highlight="reach us."
        description="Pick the channel that suits you — we answer within seconds, 24 hours a day, 7 days a week."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="reveal space-y-4">
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

          <BookingForm />
        </div>
      </section>
    </SiteShell>
  );
}

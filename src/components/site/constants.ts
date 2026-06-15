export const PHONE = "+49 341 1234567";
export const PHONE_TEL = "+493411234567";
export const WHATSAPP = "+493411234567";
export const EMAIL = "dispatch@leipzigtaxi-nr1.de";
export const ADDRESS = "Augustusplatz 1, 04109 Leipzig, Germany";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/booking", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "frauen-nacht-taxi",
    title: "Frauen-Nacht-Taxi",
    tag: "Safety first",
    short: "Discreet, safe rides for women travelling alone after dark.",
    long: "A dedicated late-night service for women in Leipzig. Pre-arranged female drivers available on request, fixed and transparent fares, and a dispatcher who stays on the line until you're safely inside.",
  },
  {
    slug: "drive-me-home",
    title: "Drive Me Home",
    tag: "Your car, our wheel",
    short: "Had a glass too many? Our professional drivers bring you AND your car safely back home.",
    long: "Our chauffeurs meet you at the bar, restaurant or event, drive your own vehicle home for you, and make sure both you and your car are safely parked. Insured and fully licensed.",
  },
  {
    slug: "standard-taxi",
    title: "Standard Taxi Rides",
    tag: "Always on time",
    short: "Reliable, fast and comfortable transport across Leipzig and to any destination.",
    long: "Day-to-day taxi rides across Leipzig and the surrounding region. Fixed pricing, GPS-tracked vehicles and a 24/7 dispatch line — call, WhatsApp, or book online.",
  },
  {
    slug: "airport-transfer",
    title: "Airport Transfer",
    tag: "Door to door",
    short: "Punctual transfers to and from Leipzig/Halle, Berlin and Dresden airports.",
    long: "Flight-tracked pickups, meet & greet at arrivals and fixed all-inclusive pricing for transfers to Leipzig/Halle (LEJ), Berlin (BER) and Dresden (DRS). Business sedans and group vans available.",
  },
] as const;

export type Service = (typeof SERVICES)[number];

import { Phone } from "lucide-react";
import { PHONE_TEL } from "./constants";

export function FloatingCall() {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      aria-label="Call Leipzig Taxi Nr. 1"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-xl shadow-gold/40 transition-transform hover:scale-110 md:bottom-7 md:right-7"
    >
      <span className="pulse-ring absolute inset-0 rounded-full" />
      <Phone className="h-6 w-6" />
    </a>
  );
}

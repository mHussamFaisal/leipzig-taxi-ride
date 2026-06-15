import { useState } from "react";
import { ArrowRight } from "lucide-react";

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

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  return (
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
            defaultValue={defaultService}
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
  );
}

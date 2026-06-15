import { useEffect, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCall } from "./FloatingCall";

export function useReveal() {
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

export function SiteShell({ children }: { children: ReactNode }) {
  useReveal();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCall />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
      )}
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="reveal mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
          {title} {highlight && <span className="gold-gradient-text">{highlight}</span>}
        </h1>
        {description && (
          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

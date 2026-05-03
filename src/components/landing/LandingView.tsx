"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { landingListings, type LandingListing } from "@/content/landing-listings";
import { WHATSAPP_PHONE_E164, whatsappSendUrl } from "@/content/contact";
import { cn } from "@/lib/cn";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#properties", label: "Listings" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const searchTags: { id: string; label: string }[] = [
  { id: "all", label: "All Listings" },
  { id: "my-khe", label: "My Khe" },
  { id: "son-tra", label: "Son Tra" },
  { id: "hai-chau", label: "Hai Chau" },
  { id: "apartment", label: "Apartment" },
  { id: "house", label: "House" },
  { id: "studio", label: "Studio" },
];

function displayPhone(e164: string) {
  const d = e164.replace(/\D/g, "");
  if (d.startsWith("84") && d.length >= 10) {
    const rest = d.slice(2);
    return `+84 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6)}`.trim();
  }
  return `+${d}`;
}

function scrollToId(id: string) {
  const el = document.querySelector(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

function listingWhatsAppUrl(listing: LandingListing) {
  const text = `Hi Khoa — I'm interested in: ${listing.title} ($${listing.price}/month).`;
  return whatsappSendUrl(text);
}

export function LandingView() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [modal, setModal] = useState<LandingListing | null>(null);
  const [modalImg, setModalImg] = useState(0);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal, menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModal(null);
        setMenuOpen(false);
      }
      if (!modal) return;
      if (e.key === "ArrowLeft") setModalImg((i) => (i > 0 ? i - 1 : modal.images.length - 1));
      if (e.key === "ArrowRight") setModalImg((i) => (i < modal.images.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  useEffect(() => {
    if (modal) setModalImg(0);
  }, [modal]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return landingListings.filter((l) => {
        if (activeTag !== "all") {
        const byTag =
          l.keywords.includes(activeTag) || l.area === activeTag || l.type === activeTag;
        if (!byTag) return false;
      }
      if (!q) return true;
      const blob = `${l.keywords} ${l.title} ${l.location}`.toLowerCase();
      return blob.includes(q);
    });
  }, [search, activeTag]);

  const selectTag = useCallback((id: string) => {
    setActiveTag(id);
    setSearch("");
  }, []);

  const onContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSent(true);
    window.setTimeout(() => setContactSent(false), 5000);
    e.currentTarget.reset();
  };

  const phoneLabel = displayPhone(WHATSAPP_PHONE_E164);

  return (
    <div className="min-w-0 bg-[color:var(--luxe-darker)] text-[color:var(--luxe-light)]">
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(13,13,13,0.98)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
          menuOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="list-none text-center">
          {nav.map((item) => (
            <li key={item.href} className="my-8">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToId(item.href);
                }}
                className="font-display text-4xl text-white transition-colors hover:text-[color:var(--luxe-gold)]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <nav
        className={cn(
          "fixed top-0 z-[1000] flex w-full items-center justify-between px-8 py-8 transition-all duration-500 md:px-16",
          navScrolled ? "border-b border-[rgba(200,169,110,0.15)] bg-[rgba(13,13,13,0.95)] py-4 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <button type="button" onClick={() => scrollToId("#home")} className="text-left">
          <span className="font-display text-2xl font-semibold uppercase tracking-[3px] text-white md:text-[1.8rem]">
            Khoa<span className="text-[color:var(--luxe-gold)]">.</span>Rentals
          </span>
        </button>
        <ul className="hidden list-none gap-12 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => scrollToId(item.href)}
                className="group relative text-[0.8rem] uppercase tracking-[3px] text-[color:var(--luxe-light)] transition-colors hover:text-[color:var(--luxe-gold)]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--luxe-gold)] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="h-0.5 w-8 bg-white" />
          <span className="h-0.5 w-8 bg-white" />
          <span className="h-0.5 w-8 bg-white" />
        </button>
      </nav>

      {/* Hero */}
      <section id="home" className="relative flex h-[100dvh] min-h-[520px] items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="luxe-hero-bg pointer-events-none absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,13,13,0.9)_70%)]" />
        <div className="relative z-[2] max-w-[900px] px-6 text-center">
          <p className="mb-8 animate-[luxeFadeUp_1s_ease_0.3s_both] text-[0.75rem] uppercase tracking-[8px] text-[color:var(--luxe-gold)]">
            Da Nang Monthly Rentals
          </p>
          <h1 className="mb-6 animate-[luxeFadeUp_1s_ease_0.6s_both] font-display text-[2.5rem] font-light leading-[1.1] text-white sm:text-5xl md:text-[3.5rem] lg:text-[5.5rem]">
            Find Your <em className="not-italic text-[color:var(--luxe-gold)]">Perfect</em> Home in Da Nang
          </h1>
          <p className="mb-12 animate-[luxeFadeUp_1s_ease_0.9s_both] text-base font-light text-white/70 md:text-[1.1rem]">
            Affordable apartments and houses for foreigners. No agent fees, English-speaking support, verified listings from $200/month.
          </p>
          <button
            type="button"
            onClick={() => scrollToId("#properties")}
            className="animate-[luxeFadeUp_1s_ease_1.2s_both] border border-[color:var(--luxe-gold)] bg-transparent px-10 py-5 text-[0.7rem] font-medium uppercase tracking-[4px] text-[color:var(--luxe-gold)] transition-colors duration-300 hover:bg-[color:var(--luxe-gold)] hover:text-[color:var(--luxe-dark)]"
          >
            Browse Rentals
          </button>
        </div>
        <div className="absolute bottom-12 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[3px] text-white/50">Scroll</span>
          <div className="luxe-scroll-line h-[50px] w-px bg-gradient-to-b from-[color:var(--luxe-gold)] to-transparent" />
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="min-w-0 px-6 py-20 md:px-16 md:py-32" style={{ background: "#0a0a0a" }}>
        <p className="mb-6 text-[0.7rem] uppercase tracking-[6px] text-[color:var(--luxe-gold)]">Available Rentals</p>
        <h2 className="mb-8 font-display text-4xl font-normal leading-tight text-white md:text-[3.5rem]">Featured Listings</h2>
        <div className="mb-12 h-0.5 w-[60px] bg-[color:var(--luxe-gold)]" />

        <div className="mb-12 max-w-[600px]">
          <div className="relative">
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveTag("all");
              }}
              placeholder="Search by area, type, or keywords..."
              className="w-full rounded-sm border border-white/10 bg-white/[0.03] py-4 pl-5 pr-14 text-[0.85rem] tracking-wide text-white outline-none transition-all placeholder:text-white/30 placeholder:tracking-[2px] focus:border-[color:var(--luxe-gold)] focus:bg-white/[0.05]"
            />
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl opacity-40" aria-hidden>
              🔍
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {searchTags.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => selectTag(t.id)}
                className={cn(
                  "rounded-sm border px-5 py-2 text-[0.65rem] uppercase tracking-[2px] transition-all",
                  activeTag === t.id && !search.trim()
                    ? "border-[color:var(--luxe-gold)] bg-[color:var(--luxe-gold)] text-[color:var(--luxe-dark)]"
                    : "border-white/15 text-white/60 hover:border-[color:var(--luxe-gold)] hover:bg-[color:var(--luxe-gold)] hover:text-[color:var(--luxe-dark)]"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-white/50">
            <p className="font-display text-2xl italic">No listings match your search</p>
            <span className="mt-2 block text-[0.7rem] uppercase tracking-[2px] opacity-50">Try different keywords</span>
          </div>
        ) : (
          <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setModal(l)}
                className="group relative h-[420px] min-w-0 cursor-pointer overflow-hidden bg-[#1a1a1a] text-left md:h-[500px]"
              >
                <Image src={l.images[0]} alt={l.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw" />
                {l.badge ? (
                  <span className="absolute right-6 top-6 z-[2] bg-[color:var(--luxe-gold)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[2px] text-[color:var(--luxe-dark)]">
                    {l.badge}
                  </span>
                ) : null}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent p-8 pt-24">
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[3px] text-[color:var(--luxe-gold)]">📍 {l.location}</p>
                  <h3 className="mb-2 font-display text-2xl font-medium text-white">{l.title}</h3>
                  <div className="mb-2 flex gap-6 text-[0.7rem] tracking-wide text-white/50">
                    <span>
                      🛏 {l.beds} {l.beds === 1 ? "Bed" : "Beds"}
                    </span>
                    <span>
                      🛁 {l.baths} {l.baths === 1 ? "Bath" : "Baths"}
                    </span>
                  </div>
                  <p className="text-lg font-light text-[color:var(--luxe-gold-light)]">${l.price}/month</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {modal ? (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/92 p-6"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setModal(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-[1000px] overflow-y-auto rounded border border-[rgba(200,169,110,0.2)] bg-[color:var(--luxe-dark)]">
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white transition-colors hover:bg-[color:var(--luxe-gold)] hover:text-[color:var(--luxe-dark)]"
              onClick={() => setModal(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="relative h-[280px] w-full min-w-0 overflow-hidden sm:h-[400px]">
              <Image src={modal.images[modalImg]} alt={modal.title} fill className="object-cover" sizes="100vw" priority />
              <button
                type="button"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition-colors hover:bg-[color:var(--luxe-gold)] hover:text-[color:var(--luxe-dark)]"
                onClick={() => setModalImg((i) => (i > 0 ? i - 1 : modal.images.length - 1))}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition-colors hover:bg-[color:var(--luxe-gold)] hover:text-[color:var(--luxe-dark)]"
                onClick={() => setModalImg((i) => (i < modal.images.length - 1 ? i + 1 : 0))}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-2 font-display text-3xl text-white sm:text-[2.5rem]">{modal.title}</h2>
              <p className="mb-4 text-[0.7rem] uppercase tracking-[2px] text-[color:var(--luxe-gold)]">📍 {modal.location}</p>
              <p className="mb-6 font-display text-xl text-[color:var(--luxe-gold-light)] sm:text-[1.3rem]">${modal.price}/month</p>
              <div className="mb-8 flex flex-wrap gap-8 border-b border-white/10 pb-6 text-[0.8rem] text-slate-400">
                <span>
                  🛏 {modal.beds} {modal.beds === 1 ? "Bed" : "Beds"}
                </span>
                <span>
                  🛁 {modal.baths} {modal.baths === 1 ? "Bath" : "Baths"}
                </span>
                <span>{modal.features}</span>
              </div>
              <p className="mb-8 font-light leading-relaxed text-white/70">{modal.description}</p>
              <h3 className="mb-4 font-display text-xl">📍 Location</h3>
              <div className="mb-6 h-[220px] w-full min-w-0 overflow-hidden rounded border border-white/10 sm:h-[300px]">
                <iframe title="Map" src={modal.mapSrc} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <a
                href={listingWhatsAppUrl(modal)}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[color:var(--luxe-gold)] px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[3px] text-[color:var(--luxe-dark)] transition-colors hover:bg-[color:var(--luxe-gold-light)]"
              >
                Inquire About This Property
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {/* About */}
      <section id="about" className="px-6 py-20 md:px-16 md:py-32" style={{ background: "#0d0d0d" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative min-w-0">
            <div className="pointer-events-none absolute -left-5 -top-5 right-5 bottom-5 border border-[color:var(--luxe-gold)]" />
            <div className="relative h-[400px] w-full md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=800&q=80"
                alt="Da Nang coastline"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
              />
            </div>
          </div>
          <div>
            <p className="mb-6 text-[0.7rem] uppercase tracking-[6px] text-[color:var(--luxe-gold)]">About Khoa</p>
            <h2 className="mb-8 font-display text-4xl text-white md:text-[3.5rem]">Your Local Rental Expert</h2>
            <div className="mb-8 h-0.5 w-[60px] bg-[color:var(--luxe-gold)]" />
            <p className="mb-6 font-light leading-relaxed text-white/70">
              Xin chào! I&apos;m Khoa, a Da Nang local helping foreigners find affordable monthly rentals since 2018. I personally verify every listing and speak fluent English. I make the process simple and transparent.
            </p>
            <p className="mb-10 font-light leading-relaxed text-white/70">
              From beachside studios in My Khe to family houses in Son Tra, I know every neighborhood and can match you with the perfect place based on your budget and lifestyle.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-[rgba(200,169,110,0.2)] pt-8">
              <div>
                <div className="font-display text-3xl font-semibold text-[color:var(--luxe-gold)] md:text-[2.8rem]">500+</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[2px] text-white/50">Happy Expats</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-[color:var(--luxe-gold)] md:text-[2.8rem]">$200</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[2px] text-white/50">From/Month</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-[color:var(--luxe-gold)] md:text-[2.8rem]">6+</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[2px] text-white/50">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 md:px-16 md:py-32" style={{ background: "#0a0a0a" }}>
        <p className="mb-6 text-[0.7rem] uppercase tracking-[6px] text-[color:var(--luxe-gold)]">Services</p>
        <h2 className="mb-8 font-display text-4xl text-white md:text-[3.5rem]">How I Help</h2>
        <div className="mb-12 h-0.5 w-[60px] bg-[color:var(--luxe-gold)]" />
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            { n: "01", icon: "🏠", title: "Property Matching", desc: "Tell me your budget and preferences, and I'll personally find the best options for you. No endless scrolling through fake listings." },
            { n: "02", icon: "🗣️", title: "Viewing & Negotiation", desc: "I handle all property viewings and negotiate directly with landlords in Vietnamese to get you the best price." },
            { n: "03", icon: "📋", title: "Move-In Support", desc: "Contract review in English, utility setup assistance, and ongoing support throughout your stay in Da Nang." },
          ].map((s) => (
            <div key={s.n} className="relative overflow-hidden border border-white/[0.08] bg-[rgba(26,26,26,0.5)] p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(200,169,110,0.3)]">
              <span className="pointer-events-none absolute right-6 top-4 font-display text-5xl font-bold text-[rgba(200,169,110,0.08)]">{s.n}</span>
              <div className="mb-6 text-4xl">{s.icon}</div>
              <h3 className="mb-4 font-display text-2xl font-medium text-white">{s.title}</h3>
              <p className="text-[0.85rem] font-light leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-20 md:px-16 md:py-32" style={{ background: "#0d0d0d" }}>
        <p className="mb-6 text-[0.7rem] uppercase tracking-[6px] text-[color:var(--luxe-gold)]">Testimonials</p>
        <h2 className="mb-8 font-display text-4xl text-white md:text-[3.5rem]">What Expats Say</h2>
        <div className="mb-12 h-0.5 w-[60px] bg-[color:var(--luxe-gold)]" />
        <div className="flex gap-8 overflow-x-auto scroll-smooth pb-4 [scrollbar-color:var(--luxe-gold)_rgba(255,255,255,0.05)] [scrollbar-width:thin]">
          {[
            { q: `"Khoa found me a beautiful studio near My Khe Beach within 2 days. No stress, no hidden fees. Highly recommended for any foreigner moving to Da Nang!"`, a: "Sarah Johnson", r: "English Teacher, UK" },
            { q: `"After weeks of searching on Facebook groups with no luck, Khoa found us the perfect 2-bedroom apartment in Hai Chau. Saved us so much time and money."`, a: "Mark & Lisa Chen", r: "Digital Nomads, Singapore" },
            { q: `"I was nervous about renting in Vietnam as a foreigner, but Khoa made everything easy. He reviewed the contract, negotiated the deposit, and even helped set up my internet."`, a: "David Müller", r: "Retiree, Germany" },
          ].map((t, i) => (
            <div key={i} className="min-w-[min(100%,300px)] shrink-0 snap-start border border-white/[0.08] bg-[rgba(26,26,26,0.5)] p-8 sm:min-w-[450px] sm:p-12">
              <p className="mb-8 font-display text-lg italic leading-relaxed text-white/80 sm:text-[1.3rem]">{t.q}</p>
              <p className="text-[0.8rem] uppercase tracking-[2px] text-[color:var(--luxe-gold)]">{t.a}</p>
              <p className="mt-1 text-[0.7rem] text-white/40">{t.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 md:px-16 md:py-32" style={{ background: "#0a0a0a" }}>
        <p className="mb-6 text-[0.7rem] uppercase tracking-[6px] text-[color:var(--luxe-gold)]">Contact</p>
        <h2 className="mb-8 font-display text-4xl text-white md:text-[3.5rem]">Let&apos;s Find Your Place</h2>
        <div className="mb-12 h-0.5 w-[60px] bg-[color:var(--luxe-gold)]" />
        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={onContactSubmit} className="space-y-6">
            <input name="name" required placeholder="Your Name" className="w-full border-0 border-b border-white/20 bg-transparent py-4 text-[0.85rem] text-white outline-none transition-colors focus:border-[color:var(--luxe-gold)]" />
            <input name="email" type="email" required placeholder="Email Address" className="w-full border-0 border-b border-white/20 bg-transparent py-4 text-[0.85rem] text-white outline-none transition-colors focus:border-[color:var(--luxe-gold)]" />
            <input name="phone" type="tel" placeholder="Phone / WhatsApp" className="w-full border-0 border-b border-white/20 bg-transparent py-4 text-[0.85rem] text-white outline-none transition-colors focus:border-[color:var(--luxe-gold)]" />
            <input name="budget" placeholder="Budget (USD/month)" className="w-full border-0 border-b border-white/20 bg-transparent py-4 text-[0.85rem] text-white outline-none transition-colors focus:border-[color:var(--luxe-gold)]" />
            <textarea name="message" placeholder="What kind of place are you looking for?" rows={4} className="w-full resize-y border-0 border-b border-white/20 bg-transparent py-4 text-[0.85rem] text-white outline-none transition-colors focus:border-[color:var(--luxe-gold)]" />
            <button
              type="submit"
              className="border border-[color:var(--luxe-gold)] px-10 py-5 text-[0.7rem] font-medium uppercase tracking-[4px] text-[color:var(--luxe-gold)] transition-colors hover:bg-[color:var(--luxe-gold)] hover:text-[color:var(--luxe-dark)]"
            >
              Send Inquiry
            </button>
            {contactSent ? <p className="text-sm text-[color:var(--luxe-gold-light)]">Thank you — Khoa will get back to you within 24 hours.</p> : null}
          </form>
          <div className="space-y-8 border border-white/[0.08] bg-[rgba(26,26,26,0.3)] p-8">
            <div>
              <p className="mb-2 text-[0.6rem] uppercase tracking-[3px] text-[color:var(--luxe-gold)]">WhatsApp / Phone</p>
              <a href={whatsappSendUrl("Hi Khoa — I'd like help finding a monthly rental in Da Nang.")} className="text-white/70 hover:text-[color:var(--luxe-gold)]">
                {phoneLabel}
              </a>
            </div>
            <div>
              <p className="mb-2 text-[0.6rem] uppercase tracking-[3px] text-[color:var(--luxe-gold)]">Da Nang</p>
              <p className="font-light text-white/70">Monthly viewings by appointment across Son Tra, My Khe, Hai Chau &amp; more.</p>
            </div>
            <div>
              <p className="mb-2 text-[0.6rem] uppercase tracking-[3px] text-[color:var(--luxe-gold)]">Hours</p>
              <p className="font-light text-white/70">Mon — Sat / 8:00 AM — 9:00 PM</p>
            </div>
            <Link href="/listings" className="inline-block text-[0.75rem] uppercase tracking-[2px] text-[color:var(--luxe-gold)] underline-offset-4 hover:underline">
              Classic listings view →
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex flex-col flex-wrap items-center justify-between gap-8 border-t border-white/5 bg-[#0d0d0d] px-8 py-12 text-center md:flex-row md:px-16 md:text-left">
        <div className="font-display text-2xl tracking-[3px] text-white">
          Khoa<span className="text-[color:var(--luxe-gold)]">.</span>Rentals
        </div>
        <ul className="flex list-none flex-wrap justify-center gap-8">
          <li>
            <Link href="/privacy-policy" className="text-[0.7rem] uppercase tracking-[2px] text-white/50 transition-colors hover:text-[color:var(--luxe-gold)]">
              Privacy
            </Link>
          </li>
          <li>
            <a href={whatsappSendUrl("Hi Khoa — question about rentals.")} className="text-[0.7rem] uppercase tracking-[2px] text-white/50 transition-colors hover:text-[color:var(--luxe-gold)]">
              WhatsApp
            </a>
          </li>
          <li>
            <a href={`https://zalo.me/${WHATSAPP_PHONE_E164}`} className="text-[0.7rem] uppercase tracking-[2px] text-white/50 transition-colors hover:text-[color:var(--luxe-gold)]">
              Zalo
            </a>
          </li>
        </ul>
        <p className="text-[0.7rem] text-white/30">© {new Date().getFullYear()} Khoa Rentals</p>
      </footer>
    </div>
  );
}

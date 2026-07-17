"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/methode", label: "La Méthode" },
  { href: "/collection", label: "La Collection" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface-dim/80 backdrop-blur-md border-b border-outline/20">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
        <div className="flex flex-col">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-headline-md text-headline-md text-primary-fixed tracking-tight leading-none"
          >
            Mon Ami Intime
          </Link>
          <span className="font-label-caps text-[10px] text-secondary tracking-[0.2em] uppercase mt-1">
            Écris. Réfléchis. Grandis. Deviens.
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-label-md text-label-md text-on-primary-fixed-variant hover:text-secondary transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/paiement"
            aria-label="Panier"
            onClick={() => setOpen(false)}
            className="material-symbols-outlined text-on-surface hover:text-secondary transition-colors"
          >
            shopping_bag
          </Link>
          <Link
            href="/collection"
            className="hidden md:block bg-secondary text-on-secondary px-6 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 pre-order-glow rounded-lg"
          >
            Réserver
          </Link>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="material-symbols-outlined md:hidden text-on-surface hover:text-secondary transition-colors text-3xl"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out bg-surface/95 backdrop-blur-md ${
          open ? "max-h-[420px] border-t border-outline-variant/40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-8 gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-headline-md text-xl text-primary hover:text-secondary transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/collection"
            onClick={() => setOpen(false)}
            className="mt-2 bg-secondary text-on-secondary px-6 py-4 text-center font-label-caps text-label-caps uppercase tracking-widest active:scale-95 transition-transform pre-order-glow rounded-lg"
          >
            Réserver
          </Link>
        </div>
      </div>
    </nav>
  );
}

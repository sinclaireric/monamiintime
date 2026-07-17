import Link from "next/link";

const links = [
  { href: "/methode", label: "La Méthode" },
  { href: "/collection", label: "La Collection" },
  { href: "/temoignages", label: "Témoignages" },
];

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface-dim/80 backdrop-blur-md border-b border-outline/20">
      <div className="flex flex-col">
        <Link
          href="/"
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
            className="font-label-md text-label-md text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors duration-300"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="/paiement"
          aria-label="Panier"
          className="material-symbols-outlined text-on-surface hover:text-secondary transition-colors"
        >
          shopping_bag
        </Link>
        <Link
          href="/collection"
          className="hidden md:block bg-secondary text-on-secondary px-6 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 pre-order-glow"
        >
          Précommander
        </Link>
      </div>
    </nav>
  );
}

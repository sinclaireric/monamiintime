import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-highest border-t border-outline-variant/50">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-1">
          <div className="font-headline-md text-headline-md text-primary-fixed mb-6">
            Mon Ami Intime
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant/60">
            © 2026 Mon Ami Intime. Forge ton esprit, crée ta réalité.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps mb-6 text-on-surface uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/methode"
                className="font-label-sm text-label-sm text-on-surface-variant/80 hover:text-primary transition-colors"
              >
                La Méthode
              </Link>
            </li>
            <li>
              <Link
                href="/collection"
                className="font-label-sm text-label-sm text-on-surface-variant/80 hover:text-primary transition-colors"
              >
                La Collection
              </Link>
            </li>
            <li>
              <Link
                href="/temoignages"
                className="font-label-sm text-label-sm text-on-surface-variant/80 hover:text-primary transition-colors"
              >
                Témoignages
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps mb-6 text-on-surface uppercase tracking-widest">
            Support
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="font-label-sm text-label-sm text-on-surface-variant/80 hover:text-primary transition-colors"
              >
                Livraison &amp; Retours
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-label-sm text-label-sm text-on-surface-variant/80 hover:text-primary transition-colors"
              >
                Confidentialité
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-label-sm text-label-sm text-on-surface-variant/80 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps mb-6 text-on-surface uppercase tracking-widest">
            Newsletter
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-surface border border-outline-variant px-4 py-2 w-full focus:outline-none focus:border-secondary text-sm"
            />
            <button
              aria-label="S'inscrire à la newsletter"
              className="bg-secondary text-on-secondary px-4 py-2 material-symbols-outlined"
            >
              arrow_forward
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

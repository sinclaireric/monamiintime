export default function ConfirmationPage() {
  return (
    <>
      <div className="grain"></div>
      
      <main className="pt-32 pb-20 min-h-screen px-margin-mobile md:px-margin-desktop flex flex-col items-center max-w-container-max mx-auto">
      
      <header className="text-center mb-16 max-w-2xl">
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border border-secondary/30 rounded-full animate-pulse">
      <span className="material-symbols-outlined text-secondary text-3xl" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Merci pour votre confiance.</h1>
      <p className="font-headline-md text-headline-md text-on-surface-variant font-light italic">Votre voyage vers la discipline commence maintenant.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
      
      <div className="md:col-span-7 space-y-gutter">
      
      <section className="bg-surface-container-low border border-outline-variant/20 p-8 flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="relative z-10">
      <span className="font-label-caps text-label-caps text-secondary uppercase mb-2 block">DÉTAILS DE LA COMMANDE</span>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-8">
      <h2 className="font-headline-lg text-headline-lg text-on-surface">#MAI-8829</h2>
      <p className="text-on-surface-variant font-body-md opacity-70">Confirmée le 24 Octobre 2024</p>
      </div>
      <div className="space-y-6">
      <div className="flex items-start gap-4">
      <span className="material-symbols-outlined text-secondary mt-1" data-icon="package_2">package_2</span>
      <div>
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Produit</h3>
      <p className="font-headline-md text-headline-md text-secondary">Agenda Signature - Édition Forêt Sombre &amp; Or</p>
      <p className="text-on-surface-variant text-sm mt-1">Le coffret inclut : Agenda, Stylo Signature, Cartes Réflexion et Action.</p>
      </div>
      </div>
      <div className="flex items-start gap-4">
      <span className="material-symbols-outlined text-secondary mt-1" data-icon="local_shipping">local_shipping</span>
      <div>
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Livraison estimée</h3>
      <p className="font-body-lg text-body-lg text-on-surface">Expédition prévue sous 15 jours ouvrés</p>
      <p className="text-on-surface-variant text-sm mt-1">Vous recevrez un numéro de suivi dès le départ de l'entrepôt.</p>
      </div>
      </div>
      </div>
      </div>
      
      <div className="absolute -right-8 -bottom-8 opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-110 pointer-events-none">
      <span className="material-symbols-outlined text-[200px]" data-icon="spa">spa</span>
      </div>
      </section>
      </div>
      
      <div className="md:col-span-5 space-y-gutter">
      
      <div className="aspect-square w-full bg-surface-container-high border border-outline-variant/20 relative overflow-hidden group">
      <img className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDpxt9NayZ59VXWa5ALSO_PH6U2Uz7BuN4ZKuIPu8XlSiIL5QqE8fq15C8xywbJvlLlykOxgTcMAPH0A_UWuPgS-RMY0CNCdFrH_bESlYrMNJ9AtZhrL_njyA4ue2pnJroWsCmFCWEFzr0b2xOHVxy8WzjwcCpUgonlN4qx_zqM8BsnTAqhmBAiuWdDmB8LdvfmsWyknJeaWJPHDYU61l9aBhtHm5G2nmW8g5cjtHNQcLQlCeo_dNrJ0KQIWqggQKhBGJswDXJ_DX2"/>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6">
      <span className="bg-secondary/90 text-on-secondary px-3 py-1 rounded-full font-label-caps text-label-caps text-[10px]">EDITION LIMITÉE</span>
      </div>
      </div>
      
      <section className="bg-surface-container-lowest border border-outline-variant/10 p-8">
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase mb-6 tracking-widest">Prochaines étapes</h3>
      <div className="flex flex-col gap-4">
      <a className="flex items-center justify-between p-4 border border-outline-variant/30 hover:border-secondary/50 hover:bg-surface-container-low transition-all duration-300 group" href="#">
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary" data-icon="auto_stories">auto_stories</span>
      <span className="font-body-md text-on-surface">La Méthode</span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
      </a>
      <a className="flex items-center justify-between p-4 border border-outline-variant/30 hover:border-secondary/50 hover:bg-surface-container-low transition-all duration-300 group" href="#">
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary" data-icon="edit_note">edit_note</span>
      <span className="font-body-md text-on-surface">Le Journal de l'Exécutif</span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
      </a>
      </div>
      </section>
      </div>
      </div>
      
      </main>
      
      <div className="fixed bottom-12 right-12 bg-secondary text-on-secondary px-8 py-4 z-[100] transform translate-y-20 opacity-0 transition-all duration-700 ease-out flex items-center gap-4 gold-glow" id="confirmation-toast">
      <span className="material-symbols-outlined" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      <span className="font-label-caps text-label-caps">COMMANDE VALIDÉE</span>
      </div>
    </>
  );
}

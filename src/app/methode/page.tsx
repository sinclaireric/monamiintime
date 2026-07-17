import Link from "next/link";

export default function MethodePage() {
  return (
    <>
      <header className="relative pt-48 pb-32 overflow-hidden px-16">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
      <div className="z-10">
      <span className="font-label-caps text-label-caps text-secondary uppercase mb-4 block tracking-[0.2em]">Sanctuaire Digital</span>
      <h1 className="font-display-lg text-display-lg text-on-background mb-8 leading-tight">Votre confident silencieux vers la transformation.</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                          Mon Ami Intime n'est pas qu'un agenda. C'est une architecture de discipline, un espace sacré conçu pour l'homme moderne qui cherche à dompter le chaos du monde extérieur pour cultiver sa clarté intérieure.
                      </p>
      <div className="flex gap-4">
      <Link href="/collection" className="inline-block bg-secondary text-on-secondary px-8 py-4 font-label-caps text-label-caps tracking-widest uppercase">Découvrir la Collection</Link>
      </div>
      </div>
      <div className="relative group">
      <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full"></div>
      <img className="w-full aspect-[4/5] object-cover gold-border grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf435udY-HmLLWtaaifgaxBAdWzLlXFt3zfnhLu0mA-AqGSEyeXxxF1Z6SL5ltlK2TpCaP0RZkdfbYGM1-ESTrpkzmgO-IPk4E_KHKnj1t9L4I7GiLwoCiQ-qNn2RLxPX986LsW-HEa18jWzJ4EifVjz0t09GBoksZ92DfZVLd8-DBXrIxyQq6wUYuIWKMSRYdGmIf9RrJn94n0ehD-5BaMu6oe9VzOvdc5UBKZt6SLgMvVwHUKgbgcSClGED4Xm-iB5XmEyeGLZSQ"/>
      </div>
      </div>
      </header>
      
      <section className="py-32 bg-surface-container-lowest border-y border-outline-variant/20 px-16">
      <div className="max-w-3xl mx-auto text-center">
      <span className="material-symbols-outlined text-secondary text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
      <h2 className="font-headline-lg text-headline-lg italic text-on-surface mb-6">"Le seul combat que tu dois gagner est celui contre toi-même."</h2>
      <p className="font-label-caps text-label-caps text-secondary tracking-widest">CLARTÉ — FORCE — ALIGNEMENT</p>
      </div>
      </section>
      
      <section className="py-48 px-16 max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
      <div className="max-w-xl">
      <h2 className="font-display-lg text-display-lg mb-6">Le Cycle des Quatre Piliers</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">Un protocole rigoureux en quatre étapes pour transformer chaque pensée en action concrète et chaque action en succès durable.</p>
      </div>
      <div className="text-right hidden md:block">
      <span className="text-secondary font-display-lg opacity-10 text-[120px] leading-none select-none">01-04</span>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      
      <div className="bg-surface-container p-8 border border-outline-variant/30 gold-glow transition-all duration-500 flex flex-col h-full group">
      <div className="mb-12 flex justify-between items-start">
      <span className="font-display-lg text-display-lg text-secondary/30 group-hover:text-secondary transition-colors">01</span>
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
      </div>
      <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Clarifier la Vision</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">Identifiez vos objectifs cardinaux. Sans direction précise, la force n'est qu'agitation. Utilisez les Cartes Réflexion pour percer le bruit.</p>
      <div className="border-t border-outline-variant/50 pt-4 font-label-caps text-[10px] text-on-tertiary-container tracking-widest">ÉTAPE INITIALE</div>
      </div>
      
      <div className="bg-surface-container p-8 border border-outline-variant/30 gold-glow transition-all duration-500 flex flex-col h-full group">
      <div className="mb-12 flex justify-between items-start">
      <span className="font-display-lg text-display-lg text-secondary/30 group-hover:text-secondary transition-colors">02</span>
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>edit_calendar</span>
      </div>
      <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Planifier avec Intention</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">L'agenda devient votre quartier général. Structurez vos journées autour de vos priorités vitales, non des urgences d'autrui.</p>
      <div className="border-t border-outline-variant/50 pt-4 font-label-caps text-[10px] text-on-tertiary-container tracking-widest">STRATÉGIE</div>
      </div>
      
      <div className="bg-surface-container-high p-8 border border-secondary/40 gold-glow transition-all duration-500 flex flex-col h-full group relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-3 py-1 font-label-caps text-[10px]">COEUR DE MÉTHODE</div>
      <div className="mb-12 flex justify-between items-start">
      <span className="font-display-lg text-display-lg text-secondary group-hover:scale-110 transition-transform origin-left">03</span>
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
      </div>
      <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Agir avec Discipline</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">L'exécution est la seule vérité. Suivez vos rituels avec une précision chirurgicale. Utilisez le tracker d'habitudes intégré.</p>
      <div className="border-t border-outline-variant/50 pt-4 font-label-caps text-[10px] text-secondary tracking-widest">EXÉCUTION</div>
      </div>
      
      <div className="bg-surface-container p-8 border border-outline-variant/30 gold-glow transition-all duration-500 flex flex-col h-full group">
      <div className="mb-12 flex justify-between items-start">
      <span className="font-display-lg text-display-lg text-secondary/30 group-hover:text-secondary transition-colors">04</span>
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
      </div>
      <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Cultiver la Gratitude</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">Célébrez les victoires, même les plus petites. La gratitude est le carburant de la persévérance sur le long terme.</p>
      <div className="border-t border-outline-variant/50 pt-4 font-label-caps text-[10px] text-on-tertiary-container tracking-widest">RÉCOMPENSE</div>
      </div>
      </div>
      </section>
      
      <section className="py-32 px-16 bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-[800px]">
      <div className="md:col-span-8 relative overflow-hidden group">
      <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu9fSDcDDdlGybkqmU0woGuK13YTkRMHNtLgokmhg9smdFsN7UJur3w3DEEuSHlOy_BoowCCkVpoNdDLeDJEQ_6HQg-d495K4_DyFwJR9wIGQECuu5S2gMic95QW41LiGQ44n3q2wFT-gTYgt5ckvN3K4Cc4DPkeL1ibcXFi3D_qT8BolZCOxO8rwCrPrNeIK2pRIVpEed1Pf0fwboXtzSGugtG2TE74r8fMdtyqG__YwhI-xoaStD9JFq8DmA5K3Ohe2k-uWrYvdM"/>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent p-12 flex flex-col justify-end">
      <h4 className="font-headline-lg text-headline-lg text-on-surface">L'Agenda de Transition</h4>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">Le compagnon de vos heures les plus sombres et de vos matins les plus victorieux.</p>
      </div>
      </div>
      <div className="md:col-span-4 flex flex-col gap-gutter">
      <div className="h-1/2 relative overflow-hidden gold-border group">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEAhpl4IVbqP_XIyiWyuOKCKZ6Du1UZEAoFF-OxnhlWxve5bZ_LkxGQDUF9iqprS71yNpZQsKe0yq3O-k8Qtn4RCqp0vzzdiAQuFX9ZoVXxlJ8MbE4UERaAdFurS2Ttkb1WwQd6My4TcvbslW6Vg9RPFmljWJ1U92BGhDUvVjb8sXLfM8mxYL2cwYOhzfL_EbYSwaAqWjzON9wM-UMivIV7ZAwI6_p7y7FiiUI6gcuiLia6cx7K3Rd9nOZ2zqSzC4R_0U6LKTWLte"/>
      </div>
      <div className="h-1/2 bg-surface-container-high p-8 flex flex-col justify-center items-center text-center">
      <span className="material-symbols-outlined text-secondary text-5xl mb-4">lock</span>
      <h5 className="font-headline-md text-headline-md mb-2">Confidentialité Totale</h5>
      <p className="font-body-md text-body-md text-on-surface-variant">Vos pensées ne regardent que vous. Un espace hors du cloud, loin des algorithmes.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="py-48 px-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 mix-blend-overlay">
      
      </div>
      <div className="max-w-2xl mx-auto border border-outline-variant/50 p-12 bg-surface-container-lowest relative z-10">
      <div className="text-center mb-12">
      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">Le Journal de l'Exécutif</span>
      <h2 className="font-display-lg text-display-lg mb-4">Rejoignez le Cercle</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Recevez chaque mois nos protocoles de performance et nos réflexions sur la masculinité intentionnelle.</p>
      </div>
      <form className="space-y-8">
      <div>
      <label className="font-label-caps text-[10px] text-on-tertiary-container uppercase tracking-widest mb-2 block">Nom Complet</label>
      <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline-variant/50 py-4 transition-all" placeholder="GABRIEL R." type="text"/>
      </div>
      <div>
      <label className="font-label-caps text-[10px] text-on-tertiary-container uppercase tracking-widest mb-2 block">Adresse Email</label>
      <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline-variant/50 py-4 transition-all" placeholder="CONTACT@VOTREDOMAINE.COM" type="email"/>
      </div>
      <div className="pt-4">
      <button className="w-full bg-secondary text-on-secondary py-5 font-label-caps text-label-caps tracking-[0.2em] uppercase hover:bg-on-secondary-container transition-all active:scale-[0.98]">S'INSCRIRE À LA MÉTHODE</button>
      </div>
      </form>
      <p className="mt-8 text-center font-label-caps text-[9px] text-on-tertiary-container/60 uppercase">En vous inscrivant, vous acceptez notre politique de confidentialité. Silence garanti.</p>
      </div>
      </section>
    </>
  );
}

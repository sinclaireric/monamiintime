import Link from "next/link";

export default function CollectionPage() {
  return (
    <>
      <main className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      
      <div className="md:col-span-7 relative group">
      <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/20 to-transparent blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
      <div className="relative overflow-hidden bg-surface-container-high border border-outline-variant/30">
      <img className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_tUBBorrsezXSabuSXFgjzOn_FYrnhNWVj-D2GNyhRCgOF2m_Hfuf22vWdErYVcpCSkVwyiF7XozmaECoDae-J8r6x4ndTSTvWYp8JG_Jc6VtRjwEbvH-WqnX3GTzlWq7JcuYPkj6RVsH2Yd-5XeiqGxtjdHPUAroyuY8ZMyf8FbGS0PbwiTOR09gWc5D8SroONNK5GQ-SLAlfNXQk23XtIa5hCra_H1m3lipbI4fL4leAJSiegXTRJso7FMTfGxFWhIbrwh5EDK_"/>
      <div className="absolute top-4 right-4 bg-tertiary-container text-secondary px-4 py-1 font-label-caps text-label-caps tracking-widest border border-secondary/30">PRÉCOMMANDE</div>
      </div>
      </div>
      
      <div className="md:col-span-5 flex flex-col gap-8">
      <div>
      <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase">Édition Forêt Sombre &amp; Or</span>
      <h1 className="font-display-lg text-display-lg mt-2 text-on-surface">Agenda Signature</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                              Plus qu’un simple carnet, un compagnon de route pour l’homme en quête d’excellence. Conçu pour structurer le chaos et forger une discipline inébranlable.
                          </p>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant">INVESTISSEMENT</span>
      <span className="font-headline-md text-headline-md text-secondary">65,00€</span>
      </div>
      <ul className="flex flex-col gap-3 pt-2">
      <li className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
      <span className="font-body-md text-body-md">Papier de soie premium 120g sans transparence</span>
      </li>
      <li className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
      <span className="font-body-md text-body-md">Cuir Végan Vert Forêt &amp; Marquage Or pur</span>
      </li>
      <li className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
      <span className="font-body-md text-body-md">Guide de transformation masculine intégré</span>
      </li>
      </ul>
      </div>
      <Link href="/paiement" className="block text-center w-full bg-secondary text-on-secondary py-5 font-label-caps text-label-caps text-lg tracking-[0.15em] uppercase gold-glow hover:bg-secondary-fixed-dim transition-all active:scale-[0.98]">
                          Précommander maintenant
                      </Link>
      <p className="font-label-caps text-[10px] text-center text-on-surface-variant/60 uppercase">Livraison prévue sous 15 jours ouvrés.</p>
      </div>
      </div>
      </main>
      
      <section className="bg-surface-container-low py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
      <div className="text-center mb-16">
      <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">La Méthodologie</span>
      <h2 className="font-display-lg text-display-lg mt-4 text-on-surface">Forge Ton Esprit</h2>
      <div className="editorial-line w-24 mx-auto mt-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      
      <div className="bg-surface-container p-8 border border-outline-variant/20 hover:border-secondary/40 transition-colors group">
      <div className="w-12 h-12 flex items-center justify-center bg-primary-container border border-outline-variant/30 mb-6 group-hover:bg-secondary/10 transition-colors">
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>swords</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Le Combat Quotidien</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Priorisez vos 3 actions non-négociables. Chaque matin est une déclaration de guerre contre la stagnation.</p>
      </div>
      
      <div className="bg-surface-container p-8 border border-outline-variant/20 hover:border-secondary/40 transition-colors group">
      <div className="w-12 h-12 flex items-center justify-center bg-primary-container border border-outline-variant/30 mb-6 group-hover:bg-secondary/10 transition-colors">
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Stratégie Hebdomadaire</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Prenez de la hauteur. Analysez vos victoires et vos failles pour ajuster votre trajectoire dominicale.</p>
      </div>
      
      <div className="bg-surface-container p-8 border border-outline-variant/20 hover:border-secondary/40 transition-colors group">
      <div className="w-12 h-12 flex items-center justify-center bg-primary-container border border-outline-variant/30 mb-6 group-hover:bg-secondary/10 transition-colors">
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Bilan Mensuel</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">La data ne ment pas. Mesurez votre croissance dans les domaines de la vitalité, de l'esprit et de la réalisation.</p>
      </div>
      </div>
      </div>
      </section>
      
      <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }}></div>
      <div className="max-w-3xl mx-auto text-center px-margin-mobile relative z-10">
      <span className="material-symbols-outlined text-secondary/40 text-6xl mb-8 block">format_quote</span>
      <blockquote className="font-display-lg text-3xl md:text-4xl italic text-on-surface leading-relaxed">
                      "Le désordre de l'esprit est le seul obstacle entre l'homme que tu es et l'homme que tu es destiné à devenir."
                  </blockquote>
      <div className="mt-8 flex items-center justify-center gap-4">
      <div className="h-px w-8 bg-secondary/30"></div>
      <cite className="font-label-caps text-label-caps text-secondary tracking-widest not-italic">MON AMI INTIME</cite>
      <div className="h-px w-8 bg-secondary/30"></div>
      </div>
      </div>
      </section>
    </>
  );
}

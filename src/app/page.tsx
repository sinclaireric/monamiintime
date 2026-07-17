import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="pt-24 overflow-hidden">

        <section className="relative min-h-[921px] flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop luxury-gradient">
          <div className="max-w-4xl z-10">
            <div className="mb-6 flex justify-center">
              <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
            </div>
            <p className="font-label-caps text-label-caps text-secondary tracking-[0.3em] uppercase mb-8 opacity-80">Écris. Réflexis. Grandis. Deviens.</p>
            <h1 className="font-display-lg text-display-lg md:text-7xl mb-8 leading-tight">
              L'agenda qui devient ton <span className="italic text-secondary">meilleur confident</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Plus qu'un outil d'organisation, Mon Ami Intime est le sanctuaire de votre transformation. Conçu pour l'homme moderne qui cherche l'alignement entre ambition et sérénité.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/collection" className="bg-secondary text-on-secondary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-all pre-order-glow">
                Commander maintenant !
              </Link>
              <Link href="/methode" className="border border-outline-variant text-on-surface px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container transition-colors">
                Découvrir la méthode
              </Link>
            </div>
          </div>
          <div className="mt-20 w-full max-w-5xl relative group">
            <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-all duration-700"></div>
            <img className="relative z-10 w-full rounded-lg gold-border-glow object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbAX8xKeDU6OZIuJ1IvhKpJdU9QVqwHfN-1HVDBcBkI4rIV70e821pjnziZiwdg3ybMYh-4v_3bHFYP8QrZH1uFrwA-SsQfgUO1tOuXTt2XzT54Yyjcw3H0plp1GuHkP12tiy9V0LMsszaSAPQ1oX3R5S7vVNvU-TDSF9WqQjfHytIxKITBtWwZw4FColkvvCOC_xXqEgxJYCmX6xod4plbTAMb20wPhibdeG4wmSaDc_a4O7tJebKvp8tPHKeZImpvByM8yCnHyLU" />
          </div>
        </section>

        <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-20">
            <h2 className="font-headline-lg text-headline-lg mb-4">Pourquoi choisir Mon Ami Intime ?</h2>
            <div className="w-24 h-1 bg-secondary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bento-card p-10 md:col-span-2">
              <span className="material-symbols-outlined text-secondary mb-6 text-4xl">auto_awesome</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Clarifier les rêves</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Transformez vos aspirations abstraites en plans d'action concrets grâce à notre système de guidage intuitif.</p>
            </div>
            <div className="bento-card p-10">
              <span className="material-symbols-outlined text-secondary mb-6 text-4xl">inventory_2</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Organiser l'essentiel</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Libérez votre esprit en structurant votre quotidien autour de vos priorités vitales.</p>
            </div>
            <div className="bento-card p-10">
              <span className="material-symbols-outlined text-secondary mb-6 text-4xl">center_focus_strong</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Focus Absolu</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Éliminez les distractions et concentrez votre énergie sur ce qui compte vraiment.</p>
            </div>
            <div className="bento-card p-10 md:col-span-2 bg-primary-container">
              <span className="material-symbols-outlined text-secondary mb-6 text-4xl">self_improvement</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Équilibre Intérieur</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Alliez productivité et bien-être mental avec des exercices de réflexion quotidienne intégrés.</p>
            </div>
            <div className="bento-card p-10">
              <span className="material-symbols-outlined text-secondary mb-6 text-4xl">trending_up</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Croissance Continue</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Mesurez votre évolution mois après mois avec des bilans structurés.</p>
            </div>
            <div className="bento-card p-10">
              <span className="material-symbols-outlined text-secondary mb-6 text-4xl">military_tech</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Discipline de Fer</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Forgez les habitudes qui feront de vous l'homme que vous aspirez à être.</p>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-high gold-border-glow rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY8JYaLidNCEZvSAp2EqbAA2RXdXXR9JgsqgdbIiZByIPzmMfLd3aQvhUJPVOm-8Osj_mXvLgjR34hqayRt_yvqZEs54eR1pXarMoYlsr-ksrvBm3WqUdCoieV_pLFiSthu2cxzK0aK3P7TI_uthOEqOAPSHN5ug8KUELsBbTtZ-3PUxLMCekcPhYsfQEgXPmcakEk8dkeyqlVeotvwLqJ7NThjzHsPQjJ4oYgbNp-YnBd8m2qTdviJmBMmCU1WKKvq1AWh4q5u7Wq" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-secondary p-8 hidden md:block">
                <p className="font-display-lg text-4xl text-on-secondary">10</p>
                <p className="font-label-caps text-xs text-on-secondary uppercase tracking-widest">Outils de transformation</p>
              </div>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-12">Ce que tu trouveras à l’intérieur</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Exercices de réflexion profonde</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Tableau de Vision Stratégique</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Planificateur de journées optimales</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Suivi d'habitudes minimaliste</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Sections de gratitude matinale</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Bilan mensuel d'alignement</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Citations d'hommes de caractère</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Méthode de gestion du temps Elite</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Pages de Journaling Libre</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all"></span>
                  <span className="font-body-lg text-on-surface">Guide de respiration et calme</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-32 text-center px-margin-mobile relative">

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-display-lg text-display-lg mb-8">Plus qu’un agenda… <br /><span className="text-secondary italic">une expérience.</span></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Chaque matin, en ouvrant ces pages, vous ne planifiez pas seulement des tâches. Vous sculptez votre destin avec la précision d'un artisan et la vision d'un leader.</p>
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <div className="material-symbols-outlined text-4xl text-secondary mb-2">ink_pen</div>
                <p className="font-label-caps text-xs uppercase tracking-widest">Écriture Fluide</p>
              </div>
              <div className="text-center">
                <div className="material-symbols-outlined text-4xl text-secondary mb-2">menu_book</div>
                <p className="font-label-caps text-xs uppercase tracking-widest">Reliure Luxe</p>
              </div>
              <div className="text-center">
                <div className="material-symbols-outlined text-4xl text-secondary mb-2">workspace_premium</div>
                <p className="font-label-caps text-xs uppercase tracking-widest">Papier FSC</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-highest">
          <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-gutter">
            <div className="bento-card p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-lg text-headline-lg mb-6">Une qualité pensée pour durer</h3>
                <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">Nous avons sélectionné les matériaux les plus nobles : couverture en cuir vegan texturé, marquage à chaud doré à la feuille, et un papier 120g/m² qui ne laisse aucune trace de plume. Un objet que vous serez fier de transmettre.</p>
              </div>
              <img className="w-full h-48 object-cover rounded-lg border border-outline/20" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJOKI6XvwFQXWRpRQrWoXDgQ-n0l_NHsE7eW7n4c1eZqwydW6T1Hgn-W7SW12UDnfGHk1Ot_Yb6e2vPbP18Xt4U0NZ5KDhz160u3wz08fpGmPkE6MIkvlu133qoet9U9QqxWNi_1VUjMBomTNbEdqtvDXXRpuy_XsMxuAJO2l1C3tLPEg1MyeMQOKFXBApNHjk_C0qakZyu6LR81SM9umV0sfY1qDkA0r9lktanyUV9Jlsav3yDRGW9BbHMyHUce2Iob_n8A0p-Xp" />
            </div>
            <div className="space-y-gutter">
              <div className="bento-card p-10 bg-secondary/5 border-secondary/20">
                <h3 className="font-headline-md text-headline-md mb-4">À qui s'adresse-t-il ?</h3>
                <p className="font-body-md text-on-surface-variant">À l'homme qui refuse la médiocrité. À l'entrepreneur, au créatif, au bâtisseur qui sait que le chaos extérieur se dompte par l'ordre intérieur.</p>
              </div>
              <div className="bento-card p-10 bg-tertiary-container border-tertiary/20">
                <h3 className="font-headline-md text-headline-md mb-4">Notre Mission</h3>
                <p className="font-body-md text-on-surface-variant">Reconnecter avec l'essentiel dans un monde de bruit constant. Offrir un havre de paix pour votre esprit.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 overflow-hidden bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <h2 className="font-display-lg text-4xl mb-6">Ils ont commencé leur voyage.</h2>
                <p className="font-body-md text-on-surface-variant">Rejoignez une communauté d'hommes déterminés à s'élever.</p>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 border border-outline-variant bg-surface-container-low italic">
                  "Cet agenda a changé ma façon de voir mes journées. Je ne subis plus mon temps, je le commande."
                  <p className="mt-4 not-italic font-label-caps text-secondary">— Marc D., Entrepreneur</p>
                </div>
                <div className="p-8 border border-outline-variant bg-surface-container-low italic">
                  "L'objet en lui-même est magnifique. Écrire dedans est devenu mon rituel sacré chaque matin."
                  <p className="mt-4 not-italic font-label-caps text-secondary">— Thomas R., Architecte</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 bg-primary-container relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20"></div>
          <div className="max-w-4xl mx-auto text-center px-margin-mobile relative z-10">
            <h2 className="font-display-lg text-display-lg mb-8">Fais le premier pas vers toi-même.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">Votre transformation n'attend que votre signature. Commencez aujourd'hui le voyage le plus important de votre vie.</p>
            <Link href="/collection" className="inline-block bg-secondary text-on-secondary px-12 py-6 font-label-caps text-label-caps uppercase tracking-widest text-lg hover:scale-110 transition-all pre-order-glow">
              Je commence mon voyage intérieur
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <section className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-6 block">Contact</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-6">Écrivez-nous</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Une question sur le coffret, les précommandes ou votre voyage intérieur&nbsp;?
            Nous lisons chaque message avec attention.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          <section className="md:col-span-7">
            <form className="bento-card rounded-xl p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="prenom" className="text-[10px] uppercase tracking-wider text-outline">Prénom</label>
                  <input id="prenom" name="prenom" type="text" placeholder="Jean" className="w-full bg-surface-container-low border border-outline-variant/40 px-4 py-3 text-body-md focus:border-secondary transition-colors rounded-lg" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="nom" className="text-[10px] uppercase tracking-wider text-outline">Nom</label>
                  <input id="nom" name="nom" type="text" placeholder="Dupont" className="w-full bg-surface-container-low border border-outline-variant/40 px-4 py-3 text-body-md focus:border-secondary transition-colors rounded-lg" />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-outline">Adresse email</label>
                <input id="email" name="email" type="email" placeholder="jean.dupont@email.com" className="w-full bg-surface-container-low border border-outline-variant/40 px-4 py-3 text-body-md focus:border-secondary transition-colors rounded-lg" />
              </div>
              <div className="space-y-1">
                <label htmlFor="sujet" className="text-[10px] uppercase tracking-wider text-outline">Sujet</label>
                <select id="sujet" name="sujet" className="w-full bg-surface-container-low border border-outline-variant/40 px-4 py-3 text-body-md focus:border-secondary transition-colors rounded-lg text-on-surface">
                  <option>Question sur le coffret</option>
                  <option>Précommandes &amp; livraison</option>
                  <option>Presse &amp; partenariats</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-outline">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Votre message…" className="w-full bg-surface-container-low border border-outline-variant/40 px-4 py-3 text-body-md focus:border-secondary transition-colors rounded-lg resize-none" />
              </div>
              <button type="submit" className="w-full bg-secondary text-on-secondary py-5 font-label-caps text-label-caps tracking-[0.2em] uppercase hover:brightness-110 active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-3">
                Envoyer le message
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <p className="text-center font-label-caps text-[9px] text-on-surface-variant/60 uppercase tracking-widest">
                Réponse sous 48h ouvrées. Silence garanti sur vos données.
              </p>
            </form>
          </section>

          <aside className="md:col-span-5 space-y-gutter">
            <div className="bento-card rounded-xl p-10">
              <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">mail</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">Par email</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Pour toute demande, une seule adresse&nbsp;:
              </p>
              <a href="mailto:bonjour@monamiintime.com" className="font-label-caps text-label-caps text-secondary uppercase tracking-widest hover:brightness-110 transition-all">
                bonjour@monamiintime.com
              </a>
            </div>
            <div className="bento-card rounded-xl p-10">
              <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">photo_camera</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">Sur les réseaux</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Suivez les coulisses de la fabrication et les rituels de la communauté.
              </p>
              <div className="flex gap-8">
                <a href="#" className="font-label-caps text-label-caps text-secondary uppercase tracking-widest hover:brightness-110 transition-all">Instagram</a>
                <a href="#" className="font-label-caps text-label-caps text-secondary uppercase tracking-widest hover:brightness-110 transition-all">Pinterest</a>
              </div>
            </div>
            <div className="bento-card rounded-xl p-10 bg-tertiary-container/40">
              <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">schedule</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">Précommandes</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Les précommandes ouvrent bientôt. Chaque exemplaire est numéroté&nbsp;—
                inscrivez-vous à la newsletter depuis le pied de page pour être prévenu·e en premier.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

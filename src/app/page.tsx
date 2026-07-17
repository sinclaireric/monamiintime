import Link from "next/link";
import Countdown from "@/components/Countdown";

const contenu = [
  { icon: "handshake", title: "Le Pacte avec soi-même", text: "L'engagement fondateur que vous signez avec la seule personne qui sera là toute votre vie." },
  { icon: "travel_explore", title: "L'Audit de vie", text: "Un état des lieux honnête et bienveillant de chaque domaine de votre existence." },
  { icon: "grid_view", title: "Le Vision Board", text: "Donnez un visage à vos rêves pour que votre esprit sache où vous emmener." },
  { icon: "flag", title: "Les 10 objectifs de l'année", text: "Dix caps clairs, choisis avec le cœur, découpés en pas accessibles." },
  { icon: "routine", title: "Les habitudes quotidiennes", text: "De petits rituels répétés qui, jour après jour, changent une vie entière." },
  { icon: "favorite", title: "La Gratitude", text: "Apprendre à voir ce qui est déjà là, avant de courir vers ce qui manque." },
  { icon: "calendar_month", title: "Le Bilan mensuel", text: "Un rendez-vous mensuel avec vous-même pour célébrer, ajuster, repartir." },
  { icon: "stylus_note", title: "La Lettre à soi-même", text: "Des mots écrits aujourd'hui, à ouvrir le jour où vous en aurez besoin." },
  { icon: "child_care", title: "Guérir son enfant intérieur", text: "Des exercices doux pour revisiter votre histoire et faire la paix avec elle." },
  { icon: "military_tech", title: "Les Victoires de l'année", text: "La mémoire de tout ce que vous avez traversé, accompli et osé." },
];

const rituel = [
  { icon: "cards_star", label: "Une carte" },
  { icon: "handshake", label: "Le Pacte" },
  { icon: "format_quote", label: "Une citation" },
  { icon: "psychiatry", label: "Une branche séchée" },
  { icon: "bookmark", label: "Un marque-page" },
];

const benefices = [
  "Clarifiez votre vision",
  "Reprenez confiance",
  "Créez des habitudes durables",
  "Faites enfin ce que vous reportez depuis des années",
  "Apprenez à vous connaître profondément",
];

const temoignages = [
  {
    quote: "Ce n'est plus une course contre la montre, c'est un rendez-vous avec moi-même. Le rituel du matin a tout changé.",
    author: "Sarah L., testeuse du prototype",
  },
  {
    quote: "La profondeur des questions posées fait de Mon Ami Intime un objet dont je ne pourrais plus me passer. Un vrai compagnon de vie.",
    author: "Marc D., testeur du prototype",
  },
  {
    quote: "J'ai pleuré en écrivant la lettre à moi-même. Aucun carnet ne m'avait jamais fait cet effet.",
    author: "Aïcha K., testeuse du prototype",
  },
];

export default function HomePage() {
  return (
    <>
      <main className="pt-24 overflow-hidden">

        {/* 1. Hero — comprendre en 5 secondes */}
        <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop luxury-gradient">
          <div className="max-w-4xl z-10 py-24">
            <div className="mb-8 flex justify-center">
              <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
            </div>
            <h1 className="font-display-lg text-display-lg md:text-7xl mb-8 leading-tight text-primary">
              Mon Ami Intime
            </h1>
            <p className="font-headline-md text-headline-md md:text-3xl text-on-surface italic max-w-3xl mx-auto mb-10 leading-relaxed">
              Le compagnon qui vous accompagne vers la personne que vous êtes <span className="text-secondary">destinée à devenir</span>.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-14">
              Pendant 365 jours, transformez vos habitudes, guérissez votre histoire, retrouvez votre équilibre et construisez la vie que vous méritez.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/collection" className="bg-secondary text-on-secondary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-all pre-order-glow rounded-lg">
                Je commence mon voyage
              </Link>
              <Link href="/methode" className="border border-outline-variant text-on-surface px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container transition-colors rounded-lg">
                Découvrir l'expérience
              </Link>
            </div>
          </div>
          <div className="w-full max-w-5xl relative group pb-24">
            <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-all duration-700"></div>
            <img className="relative z-10 w-full rounded-xl gold-border-glow object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" alt="Le coffret Mon Ami Intime ouvert sur une table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbAX8xKeDU6OZIuJ1IvhKpJdU9QVqwHfN-1HVDBcBkI4rIV70e821pjnziZiwdg3ybMYh-4v_3bHFYP8QrZH1uFrwA-SsQfgUO1tOuXTt2XzT54Yyjcw3H0plp1GuHkP12tiy9V0LMsszaSAPQ1oX3R5S7vVNvU-TDSF9WqQjfHytIxKITBtWwZw4FColkvvCOC_xXqEgxJYCmX6xod4plbTAMb20wPhibdeG4wmSaDc_a4O7tJebKvp8tPHKeZImpvByM8yCnHyLU" />
          </div>
        </section>

        {/* 3. L'histoire */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-6 block">Notre histoire</span>
            <h2 className="font-headline-lg text-headline-lg md:text-5xl text-primary mb-12">Pourquoi Mon Ami Intime&nbsp;?</h2>
            <p className="font-body-lg text-body-lg md:text-xl text-on-surface-variant leading-relaxed italic">
              Ce projet est né après plusieurs années de réflexion, de blessures, de reconstruction et d'observation.
              Nous avons réalisé qu'il ne manquait pas aux gens un carnet de plus…
              il leur manquait un compagnon capable de les accompagner chaque jour vers leur meilleure version.
            </p>
            <div className="w-24 h-[1px] bg-secondary/40 mx-auto mt-16"></div>
          </div>
        </section>

        {/* 4. Ce qu'il contient */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-6 block">Le voyage intérieur</span>
            <h2 className="font-headline-lg text-headline-lg md:text-5xl text-primary mb-6">Ce que vous vivrez à l'intérieur</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Dix expériences guidées, pensées comme les chapitres d'une renaissance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <div className="aspect-[4/5] bg-surface-container-high gold-border-glow rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Pages intérieures du journal de renaissance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY8JYaLidNCEZvSAp2EqbAA2RXdXXR9JgsqgdbIiZByIPzmMfLd3aQvhUJPVOm-8Osj_mXvLgjR34hqayRt_yvqZEs54eR1pXarMoYlsr-ksrvBm3WqUdCoieV_pLFiSthu2cxzK0aK3P7TI_uthOEqOAPSHN5ug8KUELsBbTtZ-3PUxLMCekcPhYsfQEgXPmcakEk8dkeyqlVeotvwLqJ7NThjzHsPQjJ4oYgbNp-YnBd8m2qTdviJmBMmCU1WKKvq1AWh4q5u7Wq" />
            </div>
            <div className="grid gap-gutter">
              {contenu.slice(0, 5).map(({ icon, title, text }) => (
                <div key={title} className="bento-card rounded-lg p-8 flex gap-6 items-start">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-headline-md text-xl text-primary mb-2">{title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="grid gap-gutter md:order-1 order-2">
              {contenu.slice(5).map(({ icon, title, text }) => (
                <div key={title} className="bento-card rounded-lg p-8 flex gap-6 items-start">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-headline-md text-xl text-primary mb-2">{title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="aspect-[4/5] bg-surface-container-high gold-border-glow rounded-xl overflow-hidden md:order-2 order-1">
              <img className="w-full h-full object-cover transition-all duration-700 hover:scale-105" alt="Le compagnon de transformation et ses accessoires" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_tUBBorrsezXSabuSXFgjzOn_FYrnhNWVj-D2GNyhRCgOF2m_Hfuf22vWdErYVcpCSkVwyiF7XozmaECoDae-J8r6x4ndTSTvWYp8JG_Jc6VtRjwEbvH-WqnX3GTzlWq7JcuYPkj6RVsH2Yd-5XeiqGxtjdHPUAroyuY8ZMyf8FbGS0PbwiTOR09gWc5D8SroONNK5GQ-SLAlfNXQk23XtIa5hCra_H1m3lipbI4fL4leAJSiegXTRJso7FMTfGxFWhIbrwh5EDK_" />
            </div>
          </div>
        </section>

        {/* 5. Le rituel d'ouverture */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-tertiary-container/40">
          <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-6 block">Le rituel d'ouverture</span>
              <h2 className="font-headline-lg text-headline-lg md:text-5xl text-primary mb-8">L'expérience commence dès la boîte</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Quand vous ouvrez le coffret, vous découvrez&nbsp;:
              </p>
              <ul className="space-y-5 mb-12">
                {rituel.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary">{icon}</span>
                    <span className="font-body-lg text-on-surface">{label}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="border-l-2 border-secondary pl-6 font-headline-md text-xl text-primary italic">
                Le cerveau se transforme grâce aux rituels. Mon Ami Intime commence dès l'instant où vous ouvrez la boîte.
              </blockquote>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-secondary/10 blur-3xl rounded-full"></div>
              <img className="relative w-full rounded-xl gold-border-glow object-cover shadow-2xl" alt="Le coffret et son rituel d'ouverture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJOKI6XvwFQXWRpRQrWoXDgQ-n0l_NHsE7eW7n4c1eZqwydW6T1Hgn-W7SW12UDnfGHk1Ot_Yb6e2vPbP18Xt4U0NZ5KDhz160u3wz08fpGmPkE6MIkvlu133qoet9U9QqxWNi_1VUjMBomTNbEdqtvDXXRpuy_XsMxuAJO2l1C3tLPEg1MyeMQOKFXBApNHjk_C0qakZyu6LR81SM9umV0sfY1qDkA0r9lktanyUV9Jlsav3yDRGW9BbHMyHUce2Iob_n8A0p-Xp" />
            </div>
          </div>
        </section>

        {/* 6. Les bénéfices */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline-lg text-headline-lg md:text-5xl text-primary mb-16">Ce qui change, concrètement</h2>
            <ul className="space-y-6 text-left inline-block">
              {benefices.map((b) => (
                <li key={b} className="flex items-center gap-5">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-lg text-body-lg md:text-xl text-on-surface">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Témoignages */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-6 block">Ils ont testé le prototype</span>
              <h2 className="font-headline-lg text-headline-lg md:text-5xl text-primary">Leurs premiers pas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {temoignages.map(({ quote, author }) => (
                <figure key={author} className="bento-card rounded-lg p-10 italic">
                  <span className="material-symbols-outlined text-secondary/50 text-4xl mb-6 block">format_quote</span>
                  <blockquote className="font-body-lg text-on-surface mb-8">"{quote}"</blockquote>
                  <figcaption className="not-italic flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-secondary"></span>
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">{author}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Compte à rebours */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-6 block">Édition limitée</span>
            <h2 className="font-headline-lg text-headline-lg md:text-5xl text-primary mb-6">Les précommandes ouvrent bientôt</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-16">
              Chaque exemplaire est numéroté. Soyez parmi les premiers à commencer le voyage.
            </p>
            <Countdown />
          </div>
        </section>

        {/* 9. CTA final */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop text-center bg-primary-container/60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #a96b52 0%, transparent 70%)" }}></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-lg text-display-lg md:text-6xl text-primary mb-12 leading-tight">
              Êtes-vous prêt à devenir votre <span className="italic text-secondary">meilleur ami</span>&nbsp;?
            </h2>
            <p className="font-headline-md text-headline-md text-on-surface-variant italic mb-4">
              Le voyage le plus important n'est pas celui que l'on fait autour du monde.
            </p>
            <p className="font-headline-md text-headline-md text-on-surface-variant italic mb-16">
              C'est celui qui nous ramène à nous-mêmes.
            </p>
            <Link href="/collection" className="inline-block bg-secondary text-on-secondary px-14 py-6 font-label-caps text-label-caps uppercase tracking-widest text-lg hover:scale-105 transition-all pre-order-glow rounded-lg">
              Je réserve Mon Ami Intime
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

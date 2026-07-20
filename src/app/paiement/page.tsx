"use client";

import { useState } from "react";
import { PRIX, WHATSAPP_COMMANDE_URL } from "@/lib/commande";

export default function PaiementPage() {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "mobile">("stripe");

  return (
    <>
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-7 space-y-12">
            <div>
              <h1 className="font-headline-lg text-headline-lg mb-2">Finalisation de la commande</h1>
              <p className="text-on-surface-variant font-body-md">Écris. Réfléchis. Grandis. Deviens.</p>
            </div>

            <section className="space-y-6">
              <h2 className="font-label-caps text-label-caps text-secondary">01. Informations de Livraison</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-outline">Prénom</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant/30 px-4 py-3 text-body-md focus:border-secondary transition-colors" placeholder="Jean" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-outline">Nom</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant/30 px-4 py-3 text-body-md focus:border-secondary transition-colors" placeholder="Dupont" type="text" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-outline">Adresse</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/30 px-4 py-3 text-body-md focus:border-secondary transition-colors" placeholder="123 Avenue de la Renaissance" type="text" />
              </div>
            </section>


            <a href={WHATSAPP_COMMANDE_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-secondary text-on-secondary py-5 font-label-caps text-[12px] tracking-[0.2em] font-bold transition-all hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-3">
              FINALISER LA PRÉCOMMANDE SUR WHATSAPP
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <p className="text-center font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-widest -mt-4">
              Vous serez redirigé vers WhatsApp pour confirmer votre précommande.
            </p>
            <div className="flex items-center justify-center gap-8 py-4 opacity-50 grayscale">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">lock</span> <span className="text-[10px] font-label-caps">PAIEMENT SÉCURISÉ SSL</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified_user</span> <span className="text-[10px] font-label-caps">Garantie 30 Jours</span></div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8 bg-surface-container-high/40 p-8 rounded-lg border border-outline-variant/20 backdrop-blur-sm">
              <h2 className="font-label-caps text-label-caps text-secondary border-b border-outline-variant/30 pb-4">Résumé de l'ordre</h2>
              <div className="flex gap-6">
                <div className="w-32 h-44 bg-surface-container-lowest relative flex-shrink-0 group overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVsUnneyz3hCPEyMUsDz1iB_M1vF60tp9AzT2XyeNFGg6fDkZpVjcP7TDX3R53ggkve8VAxhY7ah1P7Un_WPkoO2mXuAtpMljY9HPXc4Q4EZP7K26mRmVG1dRgQWFDlFpcAcd5UB5ENjLaOXJ7jwU30NeIYGPDGURaPXJtYEMSIovraLIyFGjcRH4uIfpMbpA6frDA48IbNZ_a9DFId2zmNbkyGNxhEAqxcqZqPfrv25JgK7gVpdgQWOUwg25GRQ-QNAYbp12S8kRI" />
                  <div className="absolute top-2 right-2 bg-tertiary-container text-secondary text-[8px] font-bold px-2 py-1 uppercase tracking-tighter">Pre-order</div>
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <h3 className="font-headline-md text-[18px] leading-tight mb-1">Agenda Signature</h3>
                    <p className="text-[12px] text-on-surface-variant font-label-caps uppercase opacity-70">Édition Forêt Sombre &amp; Or</p>
                  </div>
                  <div className="text-secondary font-headline-md text-xl">{PRIX}</div>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Sous-total</span>
                  <span>{PRIX}</span>
                </div>
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Livraison</span>
                  <span className="text-secondary text-[11px] font-bold uppercase tracking-widest">Offert</span>
                </div>
                <div className="flex justify-between font-headline-md text-2xl pt-4 border-t border-outline-variant/30">
                  <span>Total</span>
                  <span className="text-secondary">{PRIX}</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest/50 p-4 border-l-2 border-secondary italic text-body-md text-on-surface-variant leading-relaxed">
                "Cet agenda n'est pas un simple outil, c'est l'architecte de votre nouvelle discipline."
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

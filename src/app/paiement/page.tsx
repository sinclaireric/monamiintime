"use client";

import { useState } from "react";
import Link from "next/link";

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
      <input className="w-full bg-surface-container-low border border-outline-variant/30 px-4 py-3 text-body-md focus:border-secondary transition-colors" placeholder="Jean" type="text"/>
      </div>
      <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-wider text-outline">Nom</label>
      <input className="w-full bg-surface-container-low border border-outline-variant/30 px-4 py-3 text-body-md focus:border-secondary transition-colors" placeholder="Dupont" type="text"/>
      </div>
      </div>
      <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-wider text-outline">Adresse</label>
      <input className="w-full bg-surface-container-low border border-outline-variant/30 px-4 py-3 text-body-md focus:border-secondary transition-colors" placeholder="123 Avenue de la Renaissance" type="text"/>
      </div>
      </section>
      
      <section className="space-y-6">
      <h2 className="font-label-caps text-label-caps text-secondary">02. Mode de Paiement</h2>
      <div className="bg-surface-container-low border border-outline-variant/30">
      
      <div className="flex border-b border-outline-variant/20">
      <button className={`payment-tab ${paymentMethod === "stripe" ? "active" : ""} flex-1 py-4 font-label-caps text-[11px] tracking-widest text-center transition-all hover:bg-surface-container-high`} onClick={() => setPaymentMethod("stripe")}>
                                      CARTE BANCAIRE (STRIPE)
                                  </button>
      <button className={`payment-tab ${paymentMethod === "mobile" ? "active" : ""} flex-1 py-4 font-label-caps text-[11px] tracking-widest text-center transition-all hover:bg-surface-container-high`} onClick={() => setPaymentMethod("mobile")}>
                                      MOBILE MONEY
                                  </button>
      </div>
      
      <div className="p-8">
      
      <div className={paymentMethod === "stripe" ? "space-y-6" : "hidden"}>
      <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-wider text-outline">Numéro de Carte</label>
      <div className="relative">
      <input className="w-full bg-transparent border border-outline-variant/30 px-4 py-3 pr-12 text-body-md" placeholder="0000 0000 0000 0000" type="text"/>
      <span className="material-symbols-outlined absolute right-4 top-3 text-outline">credit_card</span>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-wider text-outline">Date d'expiration</label>
      <input className="w-full bg-transparent border border-outline-variant/30 px-4 py-3 text-body-md" placeholder="MM/YY" type="text"/>
      </div>
      <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-wider text-outline">CVC</label>
      <input className="w-full bg-transparent border border-outline-variant/30 px-4 py-3 text-body-md" placeholder="***" type="password"/>
      </div>
      </div>
      </div>
      
      <div className={paymentMethod === "mobile" ? "space-y-6" : "hidden"}>
      <p className="text-body-md text-on-surface-variant mb-4">Sélectionnez votre opérateur :</p>
      <div className="grid grid-cols-3 gap-4">
      <button className="flex flex-col items-center gap-2 p-4 border border-outline-variant/30 hover:border-secondary transition-all group">
      <div className="w-12 h-12 bg-orange-500 rounded-sm flex items-center justify-center text-white font-bold text-xs">ORANGE</div>
      <span className="text-[10px] font-label-caps text-outline group-hover:text-secondary">ORANGE</span>
      </button>
      <button className="flex flex-col items-center gap-2 p-4 border border-outline-variant/30 hover:border-secondary transition-all group">
      <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-bold text-xs">MTN</div>
      <span className="text-[10px] font-label-caps text-outline group-hover:text-secondary">MTN</span>
      </button>
      <button className="flex flex-col items-center gap-2 p-4 border border-outline-variant/30 hover:border-secondary transition-all group">
      <div className="w-12 h-12 bg-blue-500 rounded-sm flex items-center justify-center text-white font-bold text-xs">WAVE</div>
      <span className="text-[10px] font-label-caps text-outline group-hover:text-secondary">WAVE</span>
      </button>
      </div>
      <div className="space-y-1 mt-6">
      <label className="text-[10px] uppercase tracking-wider text-outline">Numéro de téléphone</label>
      <input className="w-full bg-transparent border border-outline-variant/30 px-4 py-3 text-body-md" placeholder="+225 ..." type="tel"/>
      </div>
      </div>
      </div>
      </div>
      </section>
      <Link href="/confirmation" className="w-full bg-secondary text-on-secondary py-5 font-label-caps text-[12px] tracking-[0.2em] font-bold transition-all hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-3">
                          FINALISER LA PRÉCOMMANDE
                          <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
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
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVsUnneyz3hCPEyMUsDz1iB_M1vF60tp9AzT2XyeNFGg6fDkZpVjcP7TDX3R53ggkve8VAxhY7ah1P7Un_WPkoO2mXuAtpMljY9HPXc4Q4EZP7K26mRmVG1dRgQWFDlFpcAcd5UB5ENjLaOXJ7jwU30NeIYGPDGURaPXJtYEMSIovraLIyFGjcRH4uIfpMbpA6frDA48IbNZ_a9DFId2zmNbkyGNxhEAqxcqZqPfrv25JgK7gVpdgQWOUwg25GRQ-QNAYbp12S8kRI"/>
      <div className="absolute top-2 right-2 bg-tertiary-container text-secondary text-[8px] font-bold px-2 py-1 uppercase tracking-tighter">Pre-order</div>
      </div>
      <div className="flex flex-col justify-between py-2">
      <div>
      <h3 className="font-headline-md text-[18px] leading-tight mb-1">Agenda Signature</h3>
      <p className="text-[12px] text-on-surface-variant font-label-caps uppercase opacity-70">Édition Forêt Sombre &amp; Or</p>
      </div>
      <div className="text-secondary font-headline-md text-xl">65,00€</div>
      </div>
      </div>
      <div className="space-y-4 pt-4 border-t border-outline-variant/30">
      <div className="flex justify-between text-body-md">
      <span className="text-on-surface-variant">Sous-total</span>
      <span>65,00€</span>
      </div>
      <div className="flex justify-between text-body-md">
      <span className="text-on-surface-variant">Livraison</span>
      <span className="text-secondary text-[11px] font-bold uppercase tracking-widest">Offert</span>
      </div>
      <div className="flex justify-between font-headline-md text-2xl pt-4 border-t border-outline-variant/30">
      <span>Total</span>
      <span className="text-secondary">65,00€</span>
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

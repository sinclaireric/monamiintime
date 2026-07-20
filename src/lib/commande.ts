// Informations de commande — source unique pour le prix et le canal WhatsApp.

export const PRIX = "20 000 FCFA";

export const WHATSAPP_NUMERO = "237652811974";

const MESSAGE_PRECOMMANDE = "Je souhaite précommander Mon Ami Intime";

export const WHATSAPP_COMMANDE_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  MESSAGE_PRECOMMANDE
)}`;

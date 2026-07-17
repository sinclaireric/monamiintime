"use client";

import { useEffect, useState } from "react";

// Date d'ouverture des précommandes — à ajuster le moment venu.
const OPENING_DATE = new Date("2026-09-01T09:00:00+02:00");

const units = [
  { key: "jours", label: "Jours" },
  { key: "heures", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "secondes", label: "Secondes" },
] as const;

type TimeLeft = Record<(typeof units)[number]["key"], number>;

function computeTimeLeft(): TimeLeft {
  const diff = Math.max(0, OPENING_DATE.getTime() - Date.now());
  return {
    jours: Math.floor(diff / 86_400_000),
    heures: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    secondes: Math.floor(diff / 1_000) % 60,
  };
}

export default function Countdown() {
  // null au premier rendu pour éviter tout écart d'hydratation serveur/client.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(computeTimeLeft());
    const timeout = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {units.map(({ key, label }) => (
        <div
          key={key}
          className="flex flex-col items-center bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-5 py-4 md:px-8 md:py-6 min-w-[80px] md:min-w-[110px]"
        >
          <span className="font-display-lg text-3xl md:text-5xl text-primary tabular-nums">
            {timeLeft ? String(timeLeft[key]).padStart(2, "0") : "--"}
          </span>
          <span className="font-label-caps text-[10px] md:text-label-caps text-secondary uppercase tracking-widest mt-2">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

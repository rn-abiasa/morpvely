const INK = "#1a1a1a";
const PAPER = "#f5f5f2";
const BUTTER = "#f6d77a";
const BLUSH = "#f0a99b";

// Lengan berbentuk tabung: garis tebal hitam + garis paper di atasnya
function Tube({ d }) {
  return (
    <>
      <path d={d} fill="none" stroke={INK} strokeWidth="25" strokeLinecap="round" />
      <path d={d} fill="none" stroke={PAPER} strokeWidth="16" strokeLinecap="round" />
    </>
  );
}

export function GiftBuddy({ className = "" }) {
  return (
    <svg
      viewBox="0 0 260 240"
      className={className}
      role="img"
      aria-label="Kotak kado tersenyum sambil menyeimbangkan secangkir kopi"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <Tube d="M66 172 C40 182 34 206 50 228" />
      <Tube d="M176 170 C240 162 250 98 204 72" />

      {/* badan */}
      <rect x="62" y="118" width="116" height="106" rx="14" fill={PAPER} stroke={INK} strokeWidth="5" />

      {/* wajah */}
      <path d="M92 160 q7 8 14 0" fill="none" stroke={INK} strokeWidth="5" />
      <path d="M134 160 q7 8 14 0" fill="none" stroke={INK} strokeWidth="5" />
      <path d="M121 164 v9" fill="none" stroke={INK} strokeWidth="4" />
      <path d="M108 186 q12 10 24 0" fill="none" stroke={INK} strokeWidth="5" />
      <ellipse cx="86" cy="180" rx="8" ry="5" fill={BLUSH} />
      <ellipse cx="154" cy="180" rx="8" ry="5" fill={BLUSH} />

      {/* tutup kotak + pita */}
      <rect x="54" y="84" width="132" height="38" rx="10" fill={PAPER} stroke={INK} strokeWidth="5" />
      <rect x="108" y="84" width="24" height="38" fill={BUTTER} stroke={INK} strokeWidth="5" />
      <path d="M120 84 C104 58 80 68 94 84 Z" fill={BUTTER} stroke={INK} strokeWidth="5" />
      <path d="M120 84 C136 58 160 68 146 84 Z" fill={BUTTER} stroke={INK} strokeWidth="5" />

      {/* cangkir kopi */}
      <path d="M160 48 H196 V64 C196 76 188 83 178 83 C168 83 160 76 160 64 Z" fill={PAPER} stroke={INK} strokeWidth="5" />
      <path d="M160 54 H153 a8 8 0 0 0 0 16 H162" fill="none" stroke={INK} strokeWidth="5" />
      <ellipse cx="178" cy="49" rx="18" ry="4.5" fill={INK} />
    </svg>
  );
}

export function Cup({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true" strokeLinejoin="round" strokeLinecap="round">
      <path d="M10 20 H40 V33 C40 43 34 49 25 49 C16 49 10 43 10 33 Z" fill={PAPER} stroke={INK} strokeWidth="4" />
      <path d="M40 24 H45 a6 6 0 0 1 0 12 H39" fill="none" stroke={INK} strokeWidth="4" />
      <ellipse cx="25" cy="21" rx="15" ry="3.5" fill={INK} />
    </svg>
  );
}

export function Heart({ className = "", fill = BLUSH }) {
  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden="true" strokeLinejoin="round">
      <path
        d="M50 84 C8 52 6 12 30 10 C42 9 48 18 50 24 C52 18 58 9 70 10 C94 12 92 52 50 84 Z"
        fill={fill}
        stroke={INK}
        strokeWidth="6"
      />
    </svg>
  );
}

export function Sparkle({ className = "", fill = BUTTER }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" strokeLinejoin="round">
      <path
        d="M50 5 C54 34 66 46 95 50 C66 54 54 66 50 95 C46 66 34 54 5 50 C34 46 46 34 50 5 Z"
        fill={fill}
        stroke={INK}
        strokeWidth="6"
      />
    </svg>
  );
}

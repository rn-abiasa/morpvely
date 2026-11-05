import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { Sparkle } from "../components/Doodles";
import { templates } from "../data/templates";
import { SITE, waLink } from "../data/site";

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function CopyCode({ text }) {
  const [done, setDone] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // cadangan untuk browser yang menolak clipboard API
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* diabaikan */
      }
      ta.remove();
    }
    setDone(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 2000);
  }

  return (
    <Button variant="ink" size="sm" className="w-full" onClick={copy}>
      <span aria-live="polite">{done ? "Tersalin" : "Salin kode"}</span>
    </Button>
  );
}

function Card({ t }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-paper shadow-sticker">
      <div
        className="relative aspect-square border-b-2 border-ink"
        style={{ backgroundColor: t.poster.bg, color: t.poster.fg }}
      >
        {t.image ? (
          <img
            src={t.image}
            alt={`Tampilan template ${t.name}`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <div className="grid size-full place-content-center justify-items-center gap-1 text-center">
            <Sparkle className="size-5" />
            <span className="px-3 font-display text-2xl leading-none font-extrabold condensed">
              {t.name}
            </span>
          </div>
        )}
        <span className="absolute top-2 left-2 rounded-md border-2 border-dashed border-ink bg-butter px-1.5 py-0.5 font-display text-xs leading-none font-extrabold text-ink condensed">
          {t.code}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <h2 className="font-display text-base leading-tight font-extrabold condensed">
          {t.name}
        </h2>
        <p className="line-clamp-2 text-xs leading-snug text-ink/70">
          {t.summary}
        </p>
        <p className="mt-1 font-display text-base font-extrabold">
          {t.price ? rupiah.format(t.price) : "Hubungi untuk harga"}
        </p>

        <div className="mt-auto grid gap-1.5 pt-2 sm:grid-cols-2">
          {t.previewUrl ? (
            <Button
              as="a"
              href={t.previewUrl}
              target="_blank"
              rel="noreferrer"
              size="sm"
              className="w-full"
            >
              Preview
            </Button>
          ) : (
            <Button size="sm" className="w-full" disabled>
              Preview segera
            </Button>
          )}
          <CopyCode text={`${t.code} - ${t.name}`} />
        </div>
      </div>
    </li>
  );
}

export default function Showcase() {
  const wa = waLink("Halo Morpvely, aku mau pesan template: ");

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="self-start font-display text-3xl leading-tight font-extrabold condensed sticker-text sm:text-5xl">
          Template Showcase
        </h1>
        <p className="max-w-md text-sm leading-relaxed sm:text-base">
          Cek preview-nya, salin kode template yang kamu suka, lalu kirim ke
          kita
          {wa || SITE.tiktok ? (
            <>
              {" "}
              lewat{" "}
              <a
                href={wa || SITE.tiktok}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline decoration-2 underline-offset-2"
              >
                {wa ? "WhatsApp" : "TikTok"}
              </a>
            </>
          ) : null}
          .
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {templates.map((t) => (
          <Card key={t.code} t={t} />
        ))}
      </ul>
    </div>
  );
}

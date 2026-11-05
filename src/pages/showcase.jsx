import { useEffect, useRef, useState } from "react";
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
    <button type="button" className="btn btn-ink" onClick={copy}>
      <span aria-live="polite">{done ? "Tersalin" : "Salin kode"}</span>
    </button>
  );
}

function Card({ t }) {
  return (
    <li className="card sticker">
      <div
        className="thumb"
        style={{ "--bg": t.poster.bg, "--fg": t.poster.fg }}
      >
        {t.image ? (
          <img
            src={t.image}
            alt={`Tampilan template ${t.name}`}
            loading="lazy"
          />
        ) : (
          <>
            <Sparkle className="thumb-spark" />
            <span className="thumb-name">{t.name}</span>
          </>
        )}
        <span className="code-tag">{t.code}</span>
      </div>

      <div className="card-body">
        <h2 className="card-name">{t.name}</h2>
        <p className="card-text">{t.summary}</p>
        <p className="price">
          {t.price ? rupiah.format(t.price) : "Hubungi untuk harga"}
        </p>

        <div className="card-actions">
          {t.previewUrl ? (
            <a
              className="btn"
              href={t.previewUrl}
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          ) : (
            <button type="button" className="btn" disabled>
              Preview segera
            </button>
          )}
          <CopyCode text={`${t.code} - ${t.name}`} />
        </div>
      </div>
    </li>
  );
}

export default function Showcase() {
  const wa = waLink("Halo Morp Vely Gift, aku mau pesan template: ");

  return (
    <main className="wrap showcase">
      <header className="showcase-head">
        <h1 className="section-title big">Template Showcase</h1>
        <p>
          Cek preview-nya, salin kode template yang kamu suka, lalu kirim ke
          kita
          {wa || SITE.tiktok ? (
            <>
              {" "}
              lewat{" "}
              <a href={wa || SITE.tiktok} target="_blank" rel="noreferrer">
                {wa ? "WhatsApp" : "TikTok"}
              </a>
            </>
          ) : null}
          .
        </p>
      </header>

      <ul className="grid">
        {templates.map((t) => (
          <Card key={t.code} t={t} />
        ))}
      </ul>
    </main>
  );
}

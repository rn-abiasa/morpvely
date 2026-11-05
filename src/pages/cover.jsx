import { Link } from "react-router-dom";
import { GiftBuddy, Heart, Sparkle } from "../components/Doodles";
import { SITE, waLink } from "../data/site";

const steps = [
  {
    title: "Pilih template",
    text: "Buka showcase, lalu coba preview-nya langsung dari HP.",
  },
  {
    title: "Salin kodenya",
    text: "Setiap template punya kode, contohnya MVG-01. Tinggal ketuk salin.",
  },
  {
    title: "Kirim ke kita",
    text: "Kirim kodenya lewat chat. Setelah itu kita sesuaikan kontennya.",
  },
];

export default function Cover() {
  const wa = waLink(
    "Halo Morpvely, aku mau tanya soal jasa edit website gift.",
  );
  const chatHref = wa || SITE.tiktok || null;
  const chatLabel = wa ? "Chat di WhatsApp" : "Lihat di TikTok";

  return (
    <main className="wrap home">
      <section className="hero">
        <div
          className="hero-art slap"
          style={{ "--d": "0s", "--r0": "-10deg", "--r1": "2deg" }}
        >
          <GiftBuddy className="buddy" />
        </div>

        <Heart className="deco deco-heart" />
        <Sparkle className="deco deco-spark" />
      </section>

      <section
        className="note sticker slap"
        style={{ "--d": ".28s", "--r0": "-4deg", "--r1": "0deg" }}
      >
        <h2 className="note-title">Welcome Morpmers!</h2>
        <p>
          Di sini kita open jasa edit website surprise untuk birthday,
          anniversary, graduation dan lain-lain. Pilih templatenya di bawah yaa!
        </p>
        <div className="actions">
          <Link to="/showcase" className="btn btn-ink">
            Lihat showcase
          </Link>
          {chatHref && (
            <a
              href={chatHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-butter"
            >
              {chatLabel}
            </a>
          )}
        </div>
      </section>

      <section className="steps-block" aria-labelledby="steps-title">
        <h2 id="steps-title" className="section-title">
          Order Guide
        </h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step sticker">
              <span className="step-n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

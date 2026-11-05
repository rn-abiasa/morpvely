import { Link } from "react-router-dom";
import Button from "../components/Button";
import { GiftBuddy } from "../components/Doodles";
import { SITE, waLink } from "../data/site";

const steps = [
  {
    title: "Choose Your Theme",
    text: "Buka showcase, coba preview-nya, salin kode template dan kirim lewat chat.",
  },
  {
    title: "Submit Your Details",
    text: "Kirim data dan foto yang dibutuhkan.",
  },
  {
    title: "Payment & Processing",
    text: "Lakukan pembayaran dan website mulai diproses.",
  },
  {
    title: "Review & Delivery",
    text: "Review hasil website, lalu terima link dan QR Code.",
  },
];

export default function Cover() {
  const wa = waLink(
    "Halo Morpvely, aku mau tanya soal jasa edit website gift.",
  );
  const chatHref = wa || SITE.tiktok || null;
  const chatLabel = wa ? "Chat di WhatsApp" : "Lihat di TikTok";

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <section className="grid items-center gap-5 rounded-3xl border-2 border-ink bg-paper p-6 shadow-sticker motion-safe:animate-slap sm:p-10 md:grid-cols-[1fr_auto] md:gap-12">
        <GiftBuddy className="order-1 h-auto w-28 sm:w-40 md:order-2 md:w-60" />

        <div className="order-2 flex flex-col items-start gap-4 md:order-1">
          <h1 className="font-display text-4xl leading-none font-extrabold condensed sm:text-6xl">
            Welcome Morpmers!
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-ink/80 sm:text-base">
            Di sini kita open jasa edit website surprise untuk birthday,
            anniversary, graduation dan lain-lain. Pilih templatenya di bawah
            yaa!
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <Button as={Link} to="/showcase" variant="ink">
              Lihat showcase
            </Button>
            {chatHref && (
              <Button
                as="a"
                href={chatHref}
                target="_blank"
                rel="noreferrer"
                variant="butter"
              >
                {chatLabel}
              </Button>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="steps-title" className="flex flex-col gap-5">
        <h2
          id="steps-title"
          className="self-start font-display text-2xl font-extrabold condensed sticker-text sm:text-3xl"
        >
          Order Guide
        </h2>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-3 rounded-2xl border-2 border-ink bg-paper p-4 sm:flex-col"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink font-display text-sm font-extrabold text-paper">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-base leading-tight font-extrabold condensed">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

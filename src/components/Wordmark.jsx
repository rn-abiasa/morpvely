// Teks tebal dengan tepi putih ala stiker (dua lapis: tepi di belakang, isi di depan).
// Saat ini tidak dipakai di halaman, disimpan kalau nanti mau dipakai lagi.
const lines = (
  <>
    Morp
    <br />
    Vely
    <br />
    Gift
  </>
);

export default function Wordmark({ as: Tag = "h1" }) {
  return (
    <Tag
      aria-label="Morp Vely Gift"
      className="grid font-display text-[clamp(40px,13vw,104px)] leading-[0.88] font-extrabold condensed drop-shadow-[4px_6px_0_rgb(26_50_70/0.16)]"
    >
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 text-paper [-webkit-text-stroke:0.27em_var(--color-paper)] [paint-order:stroke_fill] [stroke-linejoin:round]"
      >
        {lines}
      </span>
      <span aria-hidden="true" className="col-start-1 row-start-1 text-ink">
        {lines}
      </span>
    </Tag>
  );
}

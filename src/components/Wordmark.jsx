// Teks tebal dengan tepi putih ala stiker (dua lapis: tepi di belakang, isi di depan)
export default function Wordmark({ as: Tag = "h1" }) {
  return (
    <Tag className="wordmark" aria-label="Morp Vely Gift">
      <span className="wm-back" aria-hidden="true">
        Morp
        <br />
        Vely
        <br />
        Gift
      </span>
      <span className="wm-front" aria-hidden="true">
        Morp
        <br />
        Vely
        <br />
        Gift
      </span>
    </Tag>
  );
}

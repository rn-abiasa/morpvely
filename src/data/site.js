// Isi bagian ini dulu sebelum deploy.
export const SITE = {
  brand: "Morpvely",
  // Nomor WhatsApp tanpa tanda + dan spasi, contoh: "6281234567890"
  whatsapp: "6285935391713",
  // Link profil TikTok, contoh: "https://www.tiktok.com/@namaakun"
  tiktok: "https://www.tiktok.com/@morpvely",
};

export const waLink = (text) =>
  SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
    : null;

import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { Cup } from "./Doodles";
import { SITE } from "../data/site";

const navClass = ({ isActive }) =>
  `rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ${
    isActive ? "bg-ink text-paper" : "text-ink hover:bg-butter"
  }`;

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      {/* alas potong bergaris, sedikit miring seperti di logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -inset-1/4 -z-10 -rotate-[3.5deg] bg-size-[48px_48px] bg-[linear-gradient(var(--color-grid)_2px,transparent_2px),linear-gradient(90deg,var(--color-grid)_2px,transparent_2px)]"
      />

      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          to="/"
          aria-label="Morpvely, ke beranda"
          className="flex items-center gap-2 font-display text-lg font-extrabold condensed"
        >
          <Cup className="size-8 rounded-full bg-paper p-0.5" />
          <span>Morpvely</span>
        </Link>

        <nav
          aria-label="Menu utama"
          className="flex rounded-full border-2 border-ink bg-paper p-0.5"
        >
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/showcase" className={navClass}>
            Showcase
          </NavLink>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pt-2 pb-12 sm:px-6 sm:pt-6 sm:pb-16">
        <Outlet />
      </main>

      <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-1 px-4 py-6 text-xs font-semibold sm:px-6">
        <p>Made with ❤️ by Morpvely</p>
        {SITE.tiktok && (
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-2 underline-offset-2"
          >
            Follow on TikTok
          </a>
        )}
      </footer>
      <ScrollRestoration />
    </div>
  );
}

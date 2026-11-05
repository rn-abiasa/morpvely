import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { Cup } from "./Doodles";
import { SITE } from "../data/site";

export default function Layout() {
  return (
    <div className="desk">
      <header className="topbar wrap">
        <NavLink to="/" className="brand" aria-label="Morpvely ke beranda">
          <Cup className="brand-cup" />
          <span>Morpvely</span>
        </NavLink>
        <nav className="tabs" aria-label="Menu utama">
          <NavLink to="/" end className="tab">
            Home
          </NavLink>
          <NavLink to="/showcase" className="tab">
            Showcase
          </NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="footer wrap flex-col">
        <p>Made with ❤️ by Morpvely</p>
        {SITE.tiktok && (
          <a href={SITE.tiktok} target="_blank" rel="noreferrer">
            Follow on TikTok
          </a>
        )}
      </footer>
      <ScrollRestoration />
    </div>
  );
}

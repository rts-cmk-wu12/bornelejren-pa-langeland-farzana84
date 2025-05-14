import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-theme-primary m-0 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-white text-2xl font-bold font-heading tracking-wide"
        >
          <img className="h-[45px]" src={Logo} alt="Lws" />
        </Link>
        <nav className="space-x-4 text-sm md:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive
                ? "text-white underline font-semibold"
                : "text-white/80 hover:text-white") + " font-heading transition"
            }
          >
            Forside
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              (isActive
                ? "text-white underline font-semibold"
                : "text-white/80 hover:text-white") + " font-heading transition"
            }
          >
            Om os
          </NavLink>
          <NavLink
            to="/sponsor"
            className={({ isActive }) =>
              (isActive
                ? "text-white underline font-semibold"
                : "text-white/80 hover:text-white") + " font-heading transition"
            }
          >
            Tilmeld som sponsor
          </NavLink>
          <NavLink
            to="/thank-you"
            className={({ isActive }) =>
              (isActive
                ? "text-white underline font-semibold"
                : "text-white/80 hover:text-white") + " font-heading transition"
            }
          >
            Børnelejren takker
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

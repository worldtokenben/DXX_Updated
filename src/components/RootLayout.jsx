import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
  }`;

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-content-center font-bold">
                DXX
              </div>
              <div className="leading-tight">
                <div className="font-semibold">DXX Photography Limited</div>
                <div className="text-xs text-slate-500">
                  Premium memberships
                </div>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass}>
                Memberships
              </NavLink>
              <NavLink to="/terms" className={navLinkClass}>
                Terms
              </NavLink>
              <NavLink to="/privacy" className={navLinkClass}>
                Privacy
              </NavLink>
              <NavLink to="/refunds" className={navLinkClass}>
                Refunds
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `ml-2 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <FaLock />
                  <div className="text-sm">Login</div>
                </div>
              </NavLink>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Open main menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden border-t border-slate-200 bg-white/95"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className={navLinkClass}
              >
                Memberships
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/terms"
                className={navLinkClass}
              >
                Terms
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/privacy"
                className={navLinkClass}
              >
                Privacy
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/refunds"
                className={navLinkClass}
              >
                Refunds
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/login"
                className={navLinkClass}
              >
                Login
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <Outlet />
      </main>

      <footer className="mt-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} DXX Photography Limited</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <a
              className="hover:text-slate-700"
              href="mailto:support@dxx.photography"
            >
              support@dxx.photography
            </a>
            <span>+1 (802) 231-4061</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
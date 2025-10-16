import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const linkBase =
  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors";

const SidebarLink = ({ to, icon, label, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${linkBase} ${
        isActive
          ? "bg-slate-900 text-white"
          : "text-slate-700 hover:bg-slate-100"
      }`
    }
    onClick={onClick}
    end
  >
    <span className="inline-flex h-5 w-5 items-center justify-center">
      {icon}
    </span>
    <span>{label}</span>
  </NavLink>
);

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Mobile header */}
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur sm:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <button
            type="button"
            aria-label="Open sidebar"
            className="rounded-md p-2 hover:bg-slate-100"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-content-center rounded-lg bg-slate-900 text-white font-bold">
              D
            </div>
            <div className="text-sm text-slate-600">Admin</div>
          </div>
        </div>
      </div>

      {/* Layout grid */}
      <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden sm:sticky sm:top-0 sm:h-screen sm:flex sm:flex-col sm:gap-2 sm:border-r sm:border-slate-200 sm:bg-white sm:px-3 sm:py-4">
          <div className="mb-2 flex items-center gap-3 px-2">
            <div className="grid h-9 w-9 place-content-center rounded-lg bg-slate-900 text-white font-bold">
              DXX
            </div>
            <div>
              <div className="text-sm font-semibold">DXX Admin</div>
              <div className="text-xs text-slate-500">Control Center</div>
            </div>
          </div>

          <div className="mt-2 text-[10px] uppercase tracking-wider text-slate-500 px-2">
            Overview
          </div>
          <SidebarLink to="/dashboard" label="Home" icon={<span>🏠</span>} />
          <SidebarLink
            to="/dashboard/members"
            label="Members"
            icon={<span>👥</span>}
          />
          <SidebarLink
            to="/dashboard/payments"
            label="Payments"
            icon={<span>💳</span>}
          />
          <div className="mt-4 text-[10px] uppercase tracking-wider text-slate-500 px-2">
            Manage
          </div>
          <SidebarLink
            to="/dashboard/content"
            label="Content"
            icon={<span>🗂️</span>}
          />
          <SidebarLink
            to="/dashboard/settings"
            label="Settings"
            icon={<span>⚙️</span>}
          />
        </aside>

        {/* Mobile sidebar overlay (animated) */}
        <div
          className={`fixed inset-0 z-50 sm:hidden ${
            sidebarOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!sidebarOpen}
        >
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-200 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setSidebarOpen(false)}
          />
          <div
            className={`absolute inset-y-0 left-0 w-72 border-r border-slate-200 bg-white p-4 transition-transform duration-200 will-change-transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-content-center rounded-lg bg-slate-900 text-white font-bold">
                  D
                </div>
                <div className="text-sm">DXX Admin</div>
              </div>
              <button
                className="rounded-md p-2 hover:bg-slate-100"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="grid gap-2">
              <SidebarLink
                to="/dashboard"
                label="Home"
                icon={<span>🏠</span>}
                onClick={() => setSidebarOpen(false)}
              />
              <SidebarLink
                to="/dashboard/members"
                label="Members"
                icon={<span>👥</span>}
                onClick={() => setSidebarOpen(false)}
              />
              <SidebarLink
                to="/dashboard/payments"
                label="Payments"
                icon={<span>💳</span>}
                onClick={() => setSidebarOpen(false)}
              />
              <SidebarLink
                to="/dashboard/content"
                label="Content"
                icon={<span>🗂️</span>}
                onClick={() => setSidebarOpen(false)}
              />
              <SidebarLink
                to="/dashboard/settings"
                label="Settings"
                icon={<span>⚙️</span>}
                onClick={() => setSidebarOpen(false)}
              />
            </nav>
          </div>
        </div>

        {/* Main content area */}
        <div className="h-screen overflow-y-auto bg-gradient-to-b from-white to-slate-50">
          {/* Topbar */}
          {/* <div className="sticky top-0 z-30 hidden h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur sm:flex">
            <div className="text-sm text-slate-600">Welcome back</div>
            <div className="flex items-center gap-3">
              <input
                placeholder="Search…"
                className="w-64 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
              <div className="h-8 w-8 rounded-full bg-slate-900" />
            </div>
          </div> */}

          <main className="px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

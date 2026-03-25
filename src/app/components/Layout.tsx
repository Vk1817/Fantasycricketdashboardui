import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Trophy, Users, BarChart3, Settings } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/team/1", icon: Users, label: "Teams" },
    { path: "/players", icon: BarChart3, label: "Players" },
    { path: "/admin", icon: Settings, label: "Admin" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 backdrop-blur-xl bg-gradient-to-b from-[#0f0f1e]/80 to-[#0a0a0f]/80 p-6 flex flex-col">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl tracking-wider bg-gradient-to-r from-[#ffd700] via-[#ffed4e] to-[#ffd700] bg-clip-text text-transparent">
            CRICKCAST
          </h1>
          <p className="text-xs text-purple-400 mt-1 tracking-widest">FANTASY AUCTION</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${active
                    ? "bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/50 shadow-lg shadow-purple-500/20"
                    : "hover:bg-white/5 border border-transparent"
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${active ? "text-purple-400" : "text-gray-400"}`} />
                <span className={active ? "text-white" : "text-gray-400"}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center">© 2026 CRICKCAST</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

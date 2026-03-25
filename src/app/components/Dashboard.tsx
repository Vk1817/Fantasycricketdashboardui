import { Link } from "react-router";
import { Trophy, Users, TrendingUp, Crown } from "lucide-react";
import { useEffect } from "react";

export function Dashboard() {



  const stats = [
    { label: "Total Teams", value: "24", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Active Players", value: "264", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { label: "Matches Played", value: "12", icon: Trophy, color: "from-green-500 to-emerald-500" },
    { label: "Top Score", value: "8,450", icon: Crown, color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to CRICKCAST Fantasy Auction</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`}></div>
              <div className="relative">
                <Icon className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-3xl mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Link
          to="/leaderboard"
          className="group relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <Trophy className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-2xl mb-2">View Leaderboard</h3>
          <p className="text-gray-400">Check top performing teams</p>
        </Link>

        <Link
          to="/players"
          className="group relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
        >
          <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-2xl mb-2">Player Statistics</h3>
          <p className="text-gray-400">Analyze player performance</p>
        </Link>
      </div>
    </div>
  );
}

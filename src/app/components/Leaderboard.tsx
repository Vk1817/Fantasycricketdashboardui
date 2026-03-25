import { Link } from "react-router";
import { Crown, Medal, Award } from "lucide-react";
 
export function Leaderboard() {
  const teams = [
    { id: 1, rank: 1, name: "Mumbai Mavericks", matches: 12, points: 8450, avatar: "MM" },
    { id: 2, rank: 2, name: "Chennai Champions", matches: 12, points: 8120, avatar: "CC" },
    { id: 3, rank: 3, name: "Bangalore Blasters", matches: 12, points: 7890, avatar: "BB" },
    { id: 4, rank: 4, name: "Delhi Dynamos", matches: 12, points: 7650, avatar: "DD" },
    { id: 5, rank: 5, name: "Kolkata Knights", matches: 12, points: 7420, avatar: "KK" },
    { id: 6, rank: 6, name: "Punjab Panthers", matches: 12, points: 7200, avatar: "PP" },
    { id: 7, rank: 7, name: "Rajasthan Royals", matches: 12, points: 6980, avatar: "RR" },
    { id: 8, rank: 8, name: "Hyderabad Hawks", matches: 12, points: 6750, avatar: "HH" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-300" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return null;
  };

  const getRankStyle = (rank: number) => {
    if (rank === 1) return "from-yellow-500/20 to-amber-500/20 border-yellow-500/50 shadow-yellow-500/30";
    if (rank === 2) return "from-gray-400/20 to-slate-400/20 border-gray-400/50 shadow-gray-400/30";
    if (rank === 3) return "from-amber-600/20 to-orange-600/20 border-amber-600/50 shadow-amber-600/30";
    return "from-white/5 to-white/5 border-white/10";
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Leaderboard</h1>
        <p className="text-gray-400">Top performing teams this season</p>
      </div>

      {/* Leaderboard Table */}
      <div className="leaderboard-table rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/5 border-b border-white/10">
          <div className="col-span-1 text-sm text-gray-400">Rank</div>
          <div className="col-span-5 text-sm text-gray-400">Team Name</div>
          <div className="col-span-3 text-sm text-gray-400">Matches</div>
          <div className="col-span-3 text-sm text-gray-400">Total Points</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-white/5">
          {teams.map((team) => (
            <Link
              key={team.id}
              to={`/team/${team.id}`}
              className={`
                grid grid-cols-12 gap-4 px-6 py-5 hover:bg-white/5 transition-all duration-300
                ${team.rank <= 3 ? `bg-gradient-to-r ${getRankStyle(team.rank)} shadow-lg` : ""}
              `}
            >
              {/* Rank */}
              <div className="col-span-1 flex items-center gap-2">
                {getRankIcon(team.rank)}
                <span className={team.rank <= 3 ? "text-xl" : "text-lg"}>
                  #{team.rank}
                </span>
              </div>

              {/* Team Name with Avatar */}
              <div className="col-span-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm">
                  {team.avatar}
                </div>
                <span className="text-lg">{team.name}</span>
              </div>

              {/* Matches */}
              <div className="col-span-3 flex items-center text-gray-300">
                {team.matches}
              </div>

              {/* Points */}
              <div className="col-span-3 flex items-center">
                <span className={`text-xl ${team.rank <= 3 ? "text-white" : "text-green-400"}`}>
                  {team.points.toLocaleString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

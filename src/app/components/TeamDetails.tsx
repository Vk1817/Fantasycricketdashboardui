import { useParams } from "react-router";
import { Crown, Star, TrendingUp } from "lucide-react";

export function TeamDetails() {
  const { teamId } = useParams();

  const teamData = {
    name: "Mumbai Mavericks",
    totalPoints: 8450,
    matches: 12,
    rank: 1,
  };

  const players = [
    { id: 1, name: "Virat Sharma", points: 450, role: "Batsman", isCaptain: true, isViceCaptain: false },
    { id: 2, name: "Rohit Kumar", points: 380, role: "Batsman", isCaptain: false, isViceCaptain: true },
    { id: 3, name: "Jasprit Singh", points: 420, role: "Bowler", isCaptain: false, isViceCaptain: false },
    { id: 4, name: "MS Patel", points: 340, role: "Wicket-Keeper", isCaptain: false, isViceCaptain: false },
    { id: 5, name: "Ravindra Yadav", points: 390, role: "All-Rounder", isCaptain: false, isViceCaptain: false },
    { id: 6, name: "KL Verma", points: 310, role: "Batsman", isCaptain: false, isViceCaptain: false },
    { id: 7, name: "Hardik Pandey", points: 360, role: "All-Rounder", isCaptain: false, isViceCaptain: false },
    { id: 8, name: "Yuzvendra Chahal", points: 280, role: "Bowler", isCaptain: false, isViceCaptain: false },
    { id: 9, name: "Bhuvneshwar Reddy", points: 295, role: "Bowler", isCaptain: false, isViceCaptain: false },
    { id: 10, name: "Shikhar Iyer", points: 325, role: "Batsman", isCaptain: false, isViceCaptain: false },
    { id: 11, name: "Mohammed Shami", points: 310, role: "Bowler", isCaptain: false, isViceCaptain: false },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl">
            MM
          </div>
          <div>
            <h1 className="text-4xl">{teamData.name}</h1>
            <p className="text-gray-400">Rank #{teamData.rank} · {teamData.matches} Matches</p>
          </div>
        </div>

        {/* Total Points */}
        <div className="inline-block rounded-2xl backdrop-blur-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 px-8 py-4">
          <p className="text-sm text-gray-400 mb-1">Total Points</p>
          <p className="text-5xl text-green-400">{teamData.totalPoints.toLocaleString()}</p>
        </div>
      </div>

      {/* Players Grid */}
      <div>
        <h2 className="text-2xl mb-6">Players</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map((player) => (
            <div
              key={player.id}
              className={`
                player-card relative overflow-hidden rounded-xl p-5 backdrop-blur-xl bg-white/5
                transition-all duration-300 hover:shadow-lg hover:scale-105
                ${player.isCaptain ? "border-2 border-yellow-500 shadow-yellow-500/30" : ""}
                ${player.isViceCaptain ? "border-2 border-gray-400 shadow-gray-400/30" : ""}
                ${!player.isCaptain && !player.isViceCaptain ? "border border-white/10 hover:border-white/20" : ""}
                ${player.points >= 400 ? "shadow-purple-500/20" : ""}
              `}
            >
              {/* Glow effect for high scorers */}
              {player.points >= 400 && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 opacity-20 blur-2xl"></div>
              )}

              {/* Captain/Vice-Captain Badge */}
              {player.isCaptain && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-2 py-1">
                  <Crown className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-yellow-400">C</span>
                </div>
              )}
              {player.isViceCaptain && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-gray-400/20 border border-gray-400/50 rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-gray-300" />
                  <span className="text-xs text-gray-300">VC</span>
                </div>
              )}

              <div className="relative">
                <h3 className="text-lg mb-1">{player.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{player.role}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-2xl text-green-400">{player.points}</span>
                  </div>
                  {player.isCaptain && (
                    <span className="text-xs text-yellow-400">2x Points</span>
                  )}
                  {player.isViceCaptain && (
                    <span className="text-xs text-gray-400">1.5x Points</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

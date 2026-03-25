import { useState } from "react";
import { Search, ArrowUpDown } from "lucide-react";

export function PlayerStats() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"points" | "runs" | "wickets">("points");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const players = [
    { id: 1, name: "Virat Sharma", runs: 645, wickets: 0, points: 450 },
    { id: 2, name: "Jasprit Singh", runs: 12, wickets: 24, points: 420 },
    { id: 3, name: "Ravindra Yadav", runs: 423, wickets: 12, points: 390 },
    { id: 4, name: "Rohit Kumar", runs: 534, wickets: 0, points: 380 },
    { id: 5, name: "Hardik Pandey", runs: 387, wickets: 8, points: 360 },
    { id: 6, name: "MS Patel", runs: 298, wickets: 0, points: 340 },
    { id: 7, name: "Shikhar Iyer", runs: 412, wickets: 0, points: 325 },
    { id: 8, name: "KL Verma", runs: 376, wickets: 0, points: 310 },
    { id: 9, name: "Mohammed Shami", runs: 8, wickets: 22, points: 310 },
    { id: 10, name: "Bhuvneshwar Reddy", runs: 15, wickets: 18, points: 295 },
    { id: 11, name: "Yuzvendra Chahal", runs: 5, wickets: 19, points: 280 },
  ];

  const filteredPlayers = players
    .filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const order = sortOrder === "desc" ? -1 : 1;
      return (a[sortBy] - b[sortBy]) * order;
    });

  const handleSort = (field: "points" | "runs" | "wickets") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Player Stats</h1>
        <p className="text-gray-400">Detailed player performance statistics</p>
      </div>

      {/* Search and Sort */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search players..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition-colors"
          />
        </div>

        {/* Sort Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => handleSort("points")}
            className={`px-4 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 flex items-center gap-2 ${
              sortBy === "points"
                ? "bg-purple-600/30 border border-purple-500/50"
                : "bg-white/5 border border-white/10 hover:bg-white/10"
            }`}
          >
            Points
            {sortBy === "points" && <ArrowUpDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleSort("runs")}
            className={`px-4 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 flex items-center gap-2 ${
              sortBy === "runs"
                ? "bg-purple-600/30 border border-purple-500/50"
                : "bg-white/5 border border-white/10 hover:bg-white/10"
            }`}
          >
            Runs
            {sortBy === "runs" && <ArrowUpDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleSort("wickets")}
            className={`px-4 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 flex items-center gap-2 ${
              sortBy === "wickets"
                ? "bg-purple-600/30 border border-purple-500/50"
                : "bg-white/5 border border-white/10 hover:bg-white/10"
            }`}
          >
            Wickets
            {sortBy === "wickets" && <ArrowUpDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Stats Table */}
      <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/5 border-b border-white/10">
          <div className="col-span-5 text-sm text-gray-400">Name</div>
          <div className="col-span-2 text-sm text-gray-400">Runs</div>
          <div className="col-span-2 text-sm text-gray-400">Wickets</div>
          <div className="col-span-3 text-sm text-gray-400">Points</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-white/5">
          {filteredPlayers.map((player, index) => (
            <div
              key={player.id}
              className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-white/5 transition-colors"
            >
              {/* Name */}
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-base">{player.name}</span>
              </div>

              {/* Runs */}
              <div className="col-span-2 flex items-center text-blue-400 text-lg">
                {player.runs}
              </div>

              {/* Wickets */}
              <div className="col-span-2 flex items-center text-orange-400 text-lg">
                {player.wickets}
              </div>

              {/* Points */}
              <div className="col-span-3 flex items-center text-green-400 text-xl">
                {player.points}
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No players found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}

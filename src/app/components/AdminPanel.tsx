import { useState } from "react";
import { RefreshCw, CheckCircle, Clock } from "lucide-react";

export function AdminPanel() {
  const [selectedMatch, setSelectedMatch] = useState("");
  const [updating, setUpdating] = useState(false);
  const [status, setStatus] = useState<"idle" | "updated" | "pending">("idle");

  const matches = [
    { id: "1", name: "Match 1: Mumbai vs Chennai" },
    { id: "2", name: "Match 2: Bangalore vs Delhi" },
    { id: "3", name: "Match 3: Kolkata vs Punjab" },
    { id: "4", name: "Match 4: Rajasthan vs Hyderabad" },
    { id: "5", name: "Match 5: Mumbai vs Bangalore" },
  ];

  const handleUpdatePoints = async () => {
    if (!selectedMatch) return;

    setUpdating(true);
    setStatus("pending");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setUpdating(false);
    setStatus("updated");

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Admin Panel</h1>
        <p className="text-gray-400">Manage match points and updates</p>
      </div>

      {/* Admin Controls */}
      <div className="max-w-2xl">
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8">
          <h2 className="text-2xl mb-6">Update Match Points</h2>

          {/* Match Selection */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Select Match</label>
            <select
              value={selectedMatch}
              onChange={(e) => setSelectedMatch(e.target.value)}
              className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition-colors"
            >
              <option value="">Choose a match...</option>
              {matches.map((match) => (
                <option key={match.id} value={match.id} className="bg-[#0f0f1e]">
                  {match.name}
                </option>
              ))}
            </select>
          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdatePoints}
            disabled={!selectedMatch || updating}
            className="update-button w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
          >
            <RefreshCw className={`w-5 h-5 ${updating ? "animate-spin" : ""}`} />
            <span className="text-lg">
              {updating ? "Updating Points..." : "Update Match Points"}
            </span>
          </button>

          {/* Status Indicator */}
          {status !== "idle" && (
            <div className="mt-6">
              {status === "updated" && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-600/20 border border-green-500/50">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Points updated successfully!</span>
                </div>
              )}
              {status === "pending" && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow-600/20 border border-yellow-500/50">
                  <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-400">Update in progress...</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Recent Updates */}
        <div className="mt-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl mb-4">Recent Updates</h3>
          <div className="space-y-3">
            {[
              { match: "Match 5: Mumbai vs Bangalore", time: "2 hours ago", status: "completed" },
              { match: "Match 4: Rajasthan vs Hyderabad", time: "5 hours ago", status: "completed" },
              { match: "Match 3: Kolkata vs Punjab", time: "1 day ago", status: "completed" },
            ].map((update, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/5"
              >
                <div>
                  <p className="text-sm">{update.match}</p>
                  <p className="text-xs text-gray-400 mt-1">{update.time}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

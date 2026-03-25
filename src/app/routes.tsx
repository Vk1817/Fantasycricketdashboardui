import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Leaderboard } from "./components/Leaderboard";
import { TeamDetails } from "./components/TeamDetails";
import { PlayerStats } from "./components/PlayerStats";
import { AdminPanel } from "./components/AdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "leaderboard", Component: Leaderboard },
      { path: "team/:teamId", Component: TeamDetails },
      { path: "players", Component: PlayerStats },
      { path: "admin", Component: AdminPanel },
    ],
  },
]);

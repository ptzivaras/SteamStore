import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { gamesData } from "./data/games";
import GameCard from "./components/GameCard";
import GameInfoPage from "./pages/GameInfoPage";

function HomePage() {
  const tabs = Object.keys(gamesData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [search, setSearch] = useState("");

  const filteredGames = gamesData[activeTab].filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Steam Store Clone</h1>

      <div className="flex gap-4 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 rounded-md text-black"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <Link key={game.id} to={`/game/${game.id}`}>
              <GameCard game={game} />
            </Link>
          ))
        ) : (
          <p className="text-gray-400">No games found.</p>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameInfoPage />} />
      </Routes>
    </Router>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { gamesData } from "../data/games";

export default function GameInfoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find Game from all categories
  const allGames = Object.values(gamesData).flat();
  const game = allGames.find((g) => g.id === Number(id));

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
        >
          ← Back
        </button>
        <p>Game not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
      >
        ← Back
      </button>

      <div className="max-w-2xl mx-auto bg-gray-800 p-4 rounded-lg">
        <img
          src={game.image}
          alt={game.name}
          className="rounded-md w-full h-64 object-cover mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{game.name}</h1>
        <p className="text-gray-400 mb-2">OS: {game.os.join(", ")}</p>
        <p className="mb-2">
          {game.discount > 0 ? (
            <>
              <span className="text-green-400 mr-2">
                -{Math.round(game.discount * 100)}%
              </span>
              <span className="line-through text-gray-400 mr-2">
                ${game.price.toFixed(2)}
              </span>
              ${(game.price * (1 - game.discount)).toFixed(2)}
            </>
          ) : (
            <>${game.price.toFixed(2)}</>
          )}
        </p>
        <p className="text-sm text-gray-300 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
    </div>
  );
}

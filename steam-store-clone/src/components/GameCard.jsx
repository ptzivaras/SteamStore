export default function GameCard({ game }) {
    return(
        <div className="bg-gray-800 rounded-xl p-3 text-white w-56 hover:scale-105 transition-transform">
            <img
                src={game.image}
                alt={game.name}
                className="rounded-md w-full h-32 object-cover mb-2"
            />    
            <h3 className="text-lg font-semibold">{game.name}</h3>
            <p className="text-sm text-gray-400">OS: {game.os.join(", ")}</p>
            {game.discount > 0 ? (
        <p className="text-green-400">
          -{Math.round(game.discount * 100)}%{" "}
          <span className="line-through text-gray-400">
            ${game.price.toFixed(2)}
          </span>{" "}
          ${(game.price * (1 - game.discount)).toFixed(2)}
        </p>
        ) : (
            <p>${game.price.toFixed(2)}</p>
        )}
        </div>
    )
}
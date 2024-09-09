import React, { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import ResultsComponent from "./components/ResultsComponent";
import useApiHook from "./hooks/useApiHook";
import FavoritesDisplay from "./components/FavoritesDisplay";

const App: React.FC = () => {
  const { data, loading, error, searchByName, searchRandomPokemon } =
    useApiHook();
  const [viewFavorites, setViewFavorites] = useState(false);

  const handleFavoriteToggle= () =>{
    setViewFavorites(!viewFavorites)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-center mb-4 text-black">
        Pokémon Search
      </h1>
      <SearchComponent
        onSearch={searchByName}
        onRandom={searchRandomPokemon}
        onToggle={handleFavoriteToggle}
        toggleText={viewFavorites ? "View Search" : "View Favorites"}
      />
      {loading && (
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      )}
      {error && <p className="text-center text-red-500">Pokemon not found</p>}
      {viewFavorites ? (
        <FavoritesDisplay/>
      ) : (
        data && <ResultsComponent results={data} />
      )}
    </div>
  );
};

export default App;

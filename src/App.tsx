import React, { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import ResultsComponent from "./components/ResultsComponent";
import useApiHook from "./hooks/useApiHook";

const App: React.FC = () => {
  const { data, loading, error, searchByName, searchRandomPokemon } =
    useApiHook();
  const [viewFavorites, setViewFavorites] = useState(false);

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  const handleFavoriteToggle= () =>{
    setViewFavorites(!viewFavorites)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-black">
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
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
      )}
      {error && <p className="text-center text-red-500">Error loading data</p>}
      {viewFavorites ? (
        <ResultsComponent results={favorites} />
      ) : (
        data && <ResultsComponent results={data} />
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";

interface SearchComponentProps {
  onSearch: (query: string) => void;
  onRandom: () => void;
  onToggle: () => void;
  toggleText: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearch,
  onRandom,
  onToggle,
  toggleText,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery("")
    }
  };

  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        className="border rounded p-2 w-full max-w-lg text-white"
        placeholder="Search Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
      <button
        className="bg-green-500 text-white p-2 rounded ml-2"
        onClick={onRandom}
      >
        Random
      </button>
      <button
        className="bg-red-500 text-white p-2 rounded ml-2"
        onClick={onToggle}
      >
        {toggleText}
      </button>
    </div>
  );
};

export default SearchComponent;

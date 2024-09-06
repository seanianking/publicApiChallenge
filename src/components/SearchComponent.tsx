import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
  onRandom: () => void;
}

const SearchComponent: React.FC<SearchProps> = ({ onSearch, onRandom }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="container mx-auto flex-1">
      <input
        type="text"
        className="input-field"
        placeholder="Search Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn-primary" onClick={() => onSearch(query)}>
        Search
      </button>
      <button className="btn-secondary" onClick={onRandom}>
        Random
      </button>
    </div>
  );
};

export default SearchComponent;
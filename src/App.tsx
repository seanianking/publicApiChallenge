import React from 'react';
import SearchComponent from './components/SearchComponent';
import ResultsComponent from './components/ResultsComponent';
import useApiHook from './hooks/useApiHook';

const App: React.FC = () => {
  const { data, loading, error, searchByName, searchRandomPokemon } = useApiHook();

  return (
    <div className="container">
      <SearchComponent onSearch={searchByName} onRandom={searchRandomPokemon} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ResultsComponent results={data} />
    </div>
  );
};

export default App;

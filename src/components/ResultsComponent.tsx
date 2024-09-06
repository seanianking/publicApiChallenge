import React from 'react';
import ItemComponent from './ItemComponent';

interface ResultsProps {
  results: any[];
}

const ResultsComponent: React.FC<ResultsProps> = ({ results }) => {
  if (results.length === 0) return <div>No Pokémon found.</div>;

  return (
    <div className="flex items-center">
      {results.map((result, index) => (
        <ItemComponent key={index} item={result} />
      ))}
    </div>
  );
};

export default ResultsComponent;

import React from 'react';
import ItemComponent from './ItemComponent';

interface ResultsComponentProps {
  results: any[];
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ results }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {results.map((result) => (
        <ItemComponent key={result.name} item={result} />
      ))}
    </div>
  );
};

export default ResultsComponent;

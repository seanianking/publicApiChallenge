import React from 'react';
import ItemComponent from './ItemComponent';

interface ResultsComponentProps {
  results: any[];
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ results }) => {
  return (
    <div className="grid w-full p-4">
      {results.map((result) => (
        <ItemComponent key={result.name} item={result} />
      ))}
    </div>
  );
};

export default ResultsComponent;

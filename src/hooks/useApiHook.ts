import { useState } from 'react';

const useApiHook = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results ? result.results : [result]);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const searchByName = (query: string) => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
  };

  const searchRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    fetchData(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  };

  return { data, loading, error, searchByName, searchRandomPokemon };
};

export default useApiHook;

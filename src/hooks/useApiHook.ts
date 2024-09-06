import { useState, useEffect } from 'react';

const useApiHook = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData([result]);
      setError(null);
    } catch (err:any) {
      setError(err.message);
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

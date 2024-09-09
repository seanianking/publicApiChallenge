import { useState, useEffect } from 'react';

const useFavorites = (itemsPerPage: number) => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedFavorites, setPaginatedFavorites] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
    setLoading(false);
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedFavorites(favorites.slice(start, end));
  }, [favorites, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  return { paginatedFavorites, currentPage, totalPages, loading, setCurrentPage };
};

export default useFavorites;

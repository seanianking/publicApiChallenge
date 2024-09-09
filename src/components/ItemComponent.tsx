import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ItemComponentProps {
  item: any;
}

const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((fav: any) => fav.name === item.name));
  }, [item]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const newFavorites = favorites.filter((fav: any) => fav.name !== item.name);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      favorites.push(item);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

 const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .75 }}
      className="border rounded p-4 bg-white shadow flex flex-col items-center"
    >
      <h2 className="text-xl font-bold mb-2">{capitalize(item.name)}</h2>
      <img src={item.sprites.front_default} alt={item.name} />
      <p>Height: {item.height}</p>
      <p>Weight: {item.weight}</p>
      <p>Type: {item.types.map((t: any) => t.type.name).join(', ')}</p>
      <button
        className={`mt-2 ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white p-2 rounded`}
        onClick={toggleFavorite}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </motion.div>
  );
};

export default ItemComponent;

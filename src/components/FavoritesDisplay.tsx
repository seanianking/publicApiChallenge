import React from "react";
import ItemComponent from "./ItemComponent";
import useFavorites from "../hooks/useFavorites";

const FavoritesDisplay: React.FC = () => {
  const itemsPerPage = 6;
  const {
    paginatedFavorites,
    currentPage,
    totalPages,
    loading,
    setCurrentPage,
  } = useFavorites(itemsPerPage);

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-4 text-center">Your Favorites</h2>
      {loading && (
        <div className="flex justify-center">
          <p>Loading </p>
        </div>
      )}
      {paginatedFavorites.length > 0 ? (
        <div>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedFavorites.map((item) => (
              <ItemComponent key={item.name} item={item} />
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            {totalPages <= 1 ? (
              ""
            ) : (
              <>
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
};

export default FavoritesDisplay;

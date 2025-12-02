import React from "react";
import Card from "../components/Card";

const Favoris = ({ favorites, setFavorites }) => {
  const getMoviesgenres = (genreIds) => {
    return genreIds || [];
  };

  const favoriteMovies = (movie) => {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
  };

  return (
    <div>
      <h2>Coups de Cœur</h2>
      {favorites.length === 0 ? (
        <p>Aucun film dans vos coups de coeurs</p>
      ) : (
        <div className="movies-container">
          {favorites.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              genre={getMoviesgenres(movie.genre_ids)}
              favori={favoriteMovies}
              isOnFavoritePage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoris;

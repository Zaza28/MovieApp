import React from "react";
import Card from "../components/Card";
import "../css/Favoris.css";

const Favoris = ({ favorites, setFavorites }) => {
  const genres = JSON.parse(localStorage.getItem("movieGenres")) || [];
  const getMoviesgenres = (genreIds) => {
    if (!genres.length || !genreIds) return [];

    let genreNames = [];
    for (let i = 0; i < genreIds.length; i++) {
      const genreId = genreIds[i];
      for (let j = 0; j < genres.length; j++) {
        if (genres[j].id === genreId) {
          genreNames.push(genres[j].name);
          break;
        }
      }
    }
    return genreNames;
  };
  const favoriteMovies = (movie) => {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    alert("Film supprimé de vos coups de coeurs !");
  };

  return (
    <div className="favoris-container">
      <h2 id="fav-title">Coups de Cœur</h2>
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
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoris;

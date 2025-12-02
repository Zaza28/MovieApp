import React from "react";

const Card = ({ movie, genre, favori, isOnFavoritePage }) => {
  new Date().toLocaleDateString("fr-FR");

  return (
    <div>
      <div id="movie-card">
        <h3>{movie.original_title}</h3>

        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="affiche du film"
        />
        <p>{new Date(movie.release_date).toLocaleDateString("fr-FR")}</p>
        <p>{Math.round(movie.vote_average * 10) / 10}/10</p>
        <p>{genre ? genre.join(", ") : "genres non disponibles"}</p>
        <p>{movie.overview ? movie.overview : "Synopsis non disponible"}</p>
        <button onClick={() => favori(movie)}>
          {isOnFavoritePage
            ? "Supprimer des coups de cœur"
            : "Ajouter aux coups de cœur"}
        </button>
      </div>
    </div>
  );
};

export default Card;

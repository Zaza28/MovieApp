import React from "react";

const Card = ({ movie }) => {
  new Date().toLocaleDateString("fr-FR");
  return (
    <div>
      <div id="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="affiche du film"
        />
        <h3>{movie.original_title}</h3>
        <p>{new Date(movie.release_date).toLocaleDateString("fr-FR")}</p>
        <p>{Math.round(movie.vote_average * 10) / 10}/10</p>
        <p>
          {movie.genre_names
            ? movie.genre_names.join(", ")
            : "Genres non disponibles"}
        </p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Card;

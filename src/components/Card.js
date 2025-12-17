import React from "react";
import "../css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Card = ({ movie, genre, favori, isOnFavoritePage }) => {
  new Date().toLocaleDateString("fr-FR");

  return (
    <div id="card-container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="affiche du film"
      />
      <h3>{movie.title}</h3>
      <div className="movie-card-content">
        <p>
          Sorti le : {new Date(movie.release_date).toLocaleDateString("fr-FR")}
        </p>
        <p>
          {Math.round(movie.vote_average * 10) / 10}/10
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        </p>
        <p>{genre ? genre.join(" ") : "genres non disponibles"}</p>
        <p className="synopsis">Synopsis</p>
        <p>{movie.overview ? movie.overview : "Synopsis non disponible"}</p>
      </div>
      <button className="btn-fav" onClick={() => favori(movie)}>
        {isOnFavoritePage
          ? "Supprimer des coups de cœur"
          : "Ajouter aux coups de cœur"}
      </button>
    </div>
  );
};

export default Card;

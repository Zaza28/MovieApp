import React from "react";
import "../css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ movie, genre, favori, isOnFavoritePage, isFavorite }) => {
  new Date().toLocaleDateString("fr-FR");

  return (
    <div id="card-container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="affiche du film"
      />
      <div className="movie-card-content">
        <h3 id="movie-title">{movie.title}</h3>
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
        {isOnFavoritePage ? (
          <FontAwesomeIcon
            icon={faHeartCircleXmark}
            style={{ color: "#b8e7f1ff" }}
          />
        ) : isFavorite ? (
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "rgba(196, 173, 102, 1)" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeartCirclePlus}
            style={{ color: "#b8e7f1ff" }}
          />
        )}
      </button>
    </div>
  );
};

export default Card;

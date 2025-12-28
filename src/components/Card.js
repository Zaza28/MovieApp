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
      <div id="movie-card-content">
        <h3 id="movie-title">{movie.title}</h3>
        <span className="info-rate-container">
          <p id="p-date">
            <h4 id="date">Sorti le :</h4>{" "}
            {new Date(movie.release_date).toLocaleDateString("fr-FR")}
          </p>
          <p id="p-note">
            {Math.round(movie.vote_average * 10) / 10}/10
            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          </p>
        </span>
        <p className="genres-container">
          {genre && genre.length > 0 ? (
            genre.map((g, index) => (
              <span key={index} className="p-genres">
                {g}
              </span>
            ))
          ) : (
            <p>Genres non disponibles</p>
          )}
        </p>
        <h4 className="synopsis">Synopsis</h4>
        <p id="p-synopsis">
          {movie.overview ? movie.overview : "Synopsis non disponible"}
        </p>
      </div>
      <button className="btn-fav" onClick={() => favori(movie)}>
        {isOnFavoritePage ? (
          <FontAwesomeIcon
            icon={faHeartCircleXmark}
            style={{ color: "#b9b37fff" }}
          />
        ) : isFavorite ? (
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "rgba(196, 173, 102, 1)" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeartCirclePlus}
            style={{ color: "#768ca4ff" }}
          />
        )}
      </button>
    </div>
  );
};

export default Card;

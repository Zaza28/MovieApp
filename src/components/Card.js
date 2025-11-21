import React from "react";

const Card = ({ movie }) => {
  return (
    <div>
      <div id="movie-card">
        <img
          // src={`/gIAYMDb5mIAeCAj76q1sRsKjkzo.jpg + ${movie.poster_path}`}
          src={movie.id}
          alt="affiche du film"
        />
        <h3>{movie.original_title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default Card;

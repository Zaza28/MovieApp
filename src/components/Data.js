import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Home from "../pages/Home";
const Data = ({ favorites, setFavorites }) => {
  const [data, setData] = useState("");
  const [genres, setGenres] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=3ab561c0c6316fbd756ca83ef83aba38&query=code&language=fr-FR"
      )
      .then((res) => {
        setData(res.data.results);
        console.log(res);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=3ab561c0c6316fbd756ca83ef83aba38&language=en-US"
      )
      .then((res) => {
        setGenres(res.data.genres);
        console.log(res);
      });
  }, []);
  const getMoviesgenres = (setGenres) => {
    let genreNames = [];

    for (let i = 0; i < setGenres.length; i++) {
      const genreId = setGenres[i];

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
    console.log("Avant:", favorites);
    console.log("Film cliqué:", movie);
    let isFavorite = false;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === movie.id) {
        isFavorite = true;
        break;
      }
    }
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };
  // useEffect(() => {
  //   localStorage.setItem("favoritesMovies", JSON.stringify(favorites));
  // }, [favorites]);

  return (
    <div>
      <Home />
      <div className="movies-container">
        {data.length > 0 &&
          genres.length > 0 &&
          data.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              genre={getMoviesgenres(movie.genre_ids)}
              favori={favoriteMovies}
            />
          ))}
      </div>
    </div>
  );
};

export default Data;

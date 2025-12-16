import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Data = ({ favorites, setFavorites, searchTerm, sortOrder }) => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);

  //récupère les données :
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3ab561c0c6316fbd756ca83ef83aba38&query=code&language=fr-FR"
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

  //récupère les genres des films :
  const getMoviesgenres = (genreIds) => {
    if (!genres.length) return [];
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

  // logique pour mettre les films en favoris :
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
  //fonction pour filtrer et trier les films :
  const getFilteredAndSortedMovies = () => {
    let result = data.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortOrder === "top") {
      result = result.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortOrder === "flop") {
      result = result.sort((a, b) => a.vote_average - b.vote_average);
    }
    return result;
  };
  const moviesToDisplay = getFilteredAndSortedMovies();

  // enregistrer dans le local storage les films favoris
  useEffect(() => {
    localStorage.setItem("favoritesMovies", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <div className="movies-container">
        {moviesToDisplay.length > 0 && genres.length > 0 ? (
          moviesToDisplay.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              genre={getMoviesgenres(movie.genre_ids)}
              favori={favoriteMovies}
            />
          ))
        ) : (
          <p>Aucun film trouvé pour "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};
export default Data;

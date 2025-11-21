import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
const Data = () => {
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

  const getMoviesWithGenres = () => {
    if (!data || !genres) return [];

    return data.map((movie) => {
      // Trouver les noms des genres pour ce film
      const genreNames = movie.genre_ids
        .map((genreId) => {
          const genre = genres.find((g) => g.id === genreId);
          return genre ? genre.name : "";
        })
        .filter((name) => name !== "");

      // Retourner le film avec les noms de genres ajoutés
      return {
        ...movie,
        genre_names: genreNames,
      };
    });
  };

  return (
    <div>
      <div className="movies-container">
        {data &&
          genres &&
          getMoviesWithGenres().map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
      <div>
        {genres &&
          genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
      </div>
    </div>
  );
};

export default Data;

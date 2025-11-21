import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
const Data = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((res) => {
        setData(res.data.results);
        console.log(res);
      });
  }, []);

  return (
    <div>
      <div className="movies-container">
        {data && data.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Data;

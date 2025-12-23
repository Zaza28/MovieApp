import React from "react";
import { useState } from "react";
import Data from "../components/Data";
import "../css/Home.css";

const Home = ({ favorites, setFavorites }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  //handle input
  const handleSearch = (e) => {
    setSearchMovie(e.target.value);
  };
  const handleSearchClick = () => {
    setActiveSearch(searchMovie);
  };
  //handle btn Top
  const handleRateTop = () => {
    console.log("tri par top");
    setSortOrder("top");
  };
  //handle btn Flop
  const handleRateFlop = () => {
    console.log("tri par flop");
    setSortOrder("flop");
  };
  return (
    <div className="header-container">
      <header>
        <h2 id="main-title">Moviepedia</h2>
        <input
          type="search"
          value={searchMovie}
          onChange={handleSearch}
        ></input>
        <button onClick={handleSearchClick}>Rechercher</button>
        <button onClick={handleRateTop}>Top</button>
        <button onClick={handleRateFlop}>Flop</button>
      </header>
      <section>
        <Data
          favorites={favorites}
          setFavorites={setFavorites}
          searchTerm={activeSearch}
          sortOrder={sortOrder}
        />
      </section>
    </div>
  );
};

export default Home;

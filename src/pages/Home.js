import React from "react";
import Data from "../components/Data";
const Home = ({ favorites, setFavorites }) => {
  return (
    <div> 
      <header>
        <h2>React Movies</h2>
        <input type="search" onChange={(e) => e.target.value}></input>
        <button>Rechercher</button>
        <button>Top</button>
        <button>Flop</button>
      </header>
      <section>
        <Data favorites={favorites} setFavorites={setFavorites} />
      </section>
    </div>
  );
};

export default Home;

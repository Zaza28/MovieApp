import React from "react";
import Data from "./Data";
const Home = () => {
  return (
    <div>
      <header>
        <h2>React Movies</h2>
        <input type="search"></input>
        <button>Rechercher</button>
        <button>Top</button>
        <button>Flop</button>
      </header>
      <section>
        <Data />
      </section>
    </div>
  );
};

export default Home;

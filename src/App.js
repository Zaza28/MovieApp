import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../src/pages/Home.js";
import Favoris from "./pages/Favoris";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoritesMovies");
    return saved ? JSON.parse(saved) : [];
  });
  return (
    <div className="App">
      <nav id="navlinks" role="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/Favoris">Coups de Cœur</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        ></Route>
        <Route
          path="/Favoris"
          element={
            <Favoris favorites={favorites} setFavorites={setFavorites} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

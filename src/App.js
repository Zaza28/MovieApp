import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.js";
import Favoris from "./pages/Favoris";
function App() {
  return (
    <div className="App">
      <nav id="navlinks" role="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/Favoris">Coups de Cœur</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Favoris" element={<Favoris />}></Route>
      </Routes>
    </div>
  );
}

export default App;

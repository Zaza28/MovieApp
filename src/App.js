import "./css/App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../src/pages/Home.js";
import Favoris from "./pages/Favoris";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoritesMovies");
    return saved ? JSON.parse(saved) : [];
  });
  return (
    <div className="App">
      <Navbar bg="" variant="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Moviepedia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/Favoris">
                Coups de Cœur
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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

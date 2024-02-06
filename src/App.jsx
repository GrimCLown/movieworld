import React from "react";
import "./App.css";

import Fire from "./assets/fire.png";
import Party from "./assets/partying-face.png";
import Star from "./assets/glowing-star.png";

import Navbar from "./components/Navbar.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import Highlight from "./components/MovieList/Highlight.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default App;

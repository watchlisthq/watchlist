import "./Navigation.css";

import { searchTitle, filterStreaming } from "../api/find";

export default function Navigation({ onData, onRoute }) {
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      const search = document.getElementById("searchInput").value;
      const result = await searchTitle(search);
      onRoute("results");
      onData(result);
    }
  };

  const goShows = () => {
    onRoute("shows");
  };

  const goMovies = () => {
    onRoute("movies");
  };

  const goHome = () => {
    onRoute("home");
  };

  return (
    <div class="navbar__container">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        id="searchInput"
        placeholder="Search for a genre, title, etc."
      ></input>
      <div onMouseDown={goShows} class="navbar__link">
        Shows
      </div>
      <div onMouseDown={goMovies} class="navbar__link">
        Movies
      </div>
      <div onMouseDown={goHome} class="navbar__logo">
        watchlist
      </div>
    </div>
  );
}

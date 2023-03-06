import "./Navigation.css";

import { searchTitle, filterStreaming } from "../api/find";

export default function Navigation({ onData, onSearch }) {
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      const search = document.getElementById("searchInput").value;
      const result = await searchTitle(search);
      onSearch(true);
      onData(result);
    }
  };

  const stopSearch = () => {
    onSearch(false);
  };

  return (
    <div class="navbar__container">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        id="searchInput"
        placeholder="Search for a genre, title, etc."
      ></input>
      <a href="" class="navbar__link">
        Shows
      </a>
      <a href="" class="navbar__link">
        Movies
      </a>
      <p onMouseDown={stopSearch} class="navbar__logo">
        wl
      </p>
    </div>
  );
}

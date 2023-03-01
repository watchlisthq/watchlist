import "./search.css";

import React, { useState, useEffect } from 'react';
import { searchTitle, filterStreaming } from "./find.js";

function Result(props) {
  return (
    <div class="search__element">
      <div class="search__image">
        <img src={props.image} alt="poster" width="331" height="auto"></img>
        </div>
      <div class="search__inner">
        <div class="search__title">{props.title}</div>
        <div class="search__description">{props.description}</div>
      </div>
    </div>
  );
}

function Search() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("change");
  }, [data]);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      const search = document.getElementById("searchInput").value;
      const result = await searchTitle(search);
      setData(result);
      setLoading(false);
    }
  }

  return (
    <div>
      <div class="navbar__container">
        <input type="text" onKeyDown={handleKeyDown} id="searchInput"></input>
        <a href="" class="navbar__link">
          Shows
        </a>
        <a href="" class="navbar__link">
          Movies
        </a>
        <a href="" class="navbar__logo">
          watchlist
        </a>
      </div>
      <div class="search__container">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          data.map(element => <Result image={element.backdropURLs.original} title={element.title} description={element.overview}></Result>)
        )}
      </div>
    </div>
  );
}

export default Search;
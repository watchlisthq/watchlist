import './App.css';

import React, { useState, useEffect } from 'react';
import { searchTitle, filterStreaming } from "./find.js";

function App() { 
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
        <input type="text" id="searchInput"></input>
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

      <div class="main__container">
        <div class="main__title">
          <span class="title">Your Watchlist</span>
        </div>
        <div class="main__carousel">
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
        </div>
        <div class="recommended__title">
          <span class="recommended">Recommended for you</span>
        </div>
        <div class="recommended__carousel">
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
          <a href="">
            <img src={require("./temp.png")} class="carousel__images"></img>
          </a>
        </div>
      </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        data.map(result => <p>{result.title}</p>)
      )}
    </div>
  );
}

export default App;

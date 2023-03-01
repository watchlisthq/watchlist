import "./App.css";

import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import { Item } from "./yourItem";

import React, { useState, useEffect } from "react";
import { searchTitle, filterStreaming } from "./find.js";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("change");
  }, [data]);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      const search = document.getElementById("searchInput").value;
      const result = await searchTitle(search);
      setData(result);
      setLoading(false);
    }
  };

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
        <Carousel show={3.5} slide={2} transition={0.5}>
          <Item></Item>
        </Carousel>
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
    </div>
  );
}

export default App;

import "./Results.css";

import React, { useState, useEffect } from "react";

import Button from "./Button";

export default function Results(props) {
  return (
    <div class="results__container">
      {props.query.map((element) => {
        let lastBackdrop = undefined;
        if (element.imageSet.horizontalBackdrop) {
          const keys = Object.keys(element.imageSet.horizontalBackdrop);
          const lastKey = keys[keys.length - 1];
          lastBackdrop = element.imageSet.horizontalBackdrop[lastKey];
        }
        return (
          <Result
            image={lastBackdrop}
            title={element.title}
            description={element.overview.split(" ").slice(0, 50).join(" ")}
            data={element}
            watchlist={props.watchlist}
            onSave={props.onSave}
          ></Result>
        );
      })}
    </div>
  );
}

function Result(props) {
  const [render, rerender] = useState(false);

  useEffect(() => {
    if (render === true) rerender(false);
  }, [render]);

  let image = require("../images/poster.png");
  if (props.image) image = props.image;

  return (
    <div class="results__element">
      <div class="results__image">
        <img src={image} alt="poster" width="75%" height="auto"></img>
      </div>
      <div class="results__inner">
        <div class="title__inner">
          <div class="results__title">{props.title}</div>
          <div class="results__description">{props.description}</div>
        </div>
        <Button
          data={props.data}
          checked={containsTitle(props.data, props.watchlist)}
          watchlist={props.watchlist}
          onSave={props.onSave}
          onRender={rerender}
          render={render}
        />
      </div>
    </div>
  );
}

export function containsTitle(title, save) {
  return save.data.some((x) => x.imdbId === title.imdbId);
}

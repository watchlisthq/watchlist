import "./Slides.css";
import "react-multi-carousel/lib/styles.css";

import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
};

export default function Slides(props) {
  let data = [];
  if (props.list) data = props.list.data;

  const [render, rerender] = useState(false);

  useEffect(() => {
    if (render === true) rerender(false);
  }, [render]);

  const handleDelete = (event) => {
    let newSave = {...props.list};
    let filteredArray = newSave.data.filter(
      (e) => e.imdbId !== event.target.id);
    newSave.data = filteredArray;
    rerender(true);
    props.onSave(newSave);
  };

  const getLink = (event) => {
    let filteredArray = props.list.data.filter(
      (e) => e.imdbId === event.target.id);

    filteredArray = filteredArray[0];

    if (filteredArray.streamingInfo.hasOwnProperty("us")) {
      let streams = filteredArray.streamingInfo.us;
      for (let service in streams) {
        if (streams[service][0].hasOwnProperty("link")) {
          window.open(streams[service][0].link, "_blank");
          return;
        }
      }
    }
  };

  return (
    <Carousel
      ssr
      deviceType={props.deviceType}
      itemClass="carousel__items"
      responsive={responsive}
      swipeable={true}
      partialVisbile={true}
    >
      {data.map((title) => {
        return (
          <div class="container">
            <img
              alt="poster"
              className="carousel__images"
              draggable={false}
              src={title.backdropURLs.original}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                justifyContent: "center",
              }}>
            </img>
            { props.closeable &&
              <button>
                <img
                alt="close"
                src={require("../images/close.png")}
                id={title.imdbId}
                onMouseDown={handleDelete}>
                </img>
              </button>
            }
            <div class="inner__title" id={title.imdbId} onMouseDown={getLink}>
              {title.title.slice(0, 25)}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

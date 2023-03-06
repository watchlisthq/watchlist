import "./Slides.css";

import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
};

export default function Slides(props, { deviceType }) {
  let data = [];

  if (props.data) {
    data = props.data;
  }

  return (
    <Carousel
      ssr
      deviceType={deviceType}
      itemClass="carousel__items"
      responsive={responsive}
      swipeable={true}
      partialVisbile={true}
    >
      {data.map((title) => {
        return (
          <div class="container">
            <img
              className="carousel__images"
              draggable={false}
              src={title.backdropURLs.original}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            ></img>
            <button>
              <img src={require("../images/close.png")}></img>
            </button>
            <div class="inner__title">{title.title.slice(0, 25)}</div>
          </div>
        );
      })}
    </Carousel>
  );
}

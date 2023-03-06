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

const images = [];

export default function Slides(props, { deviceType }) {
  let data = images;

  if (props.data) {
    data = props.data.map((title) => title.backdropURLs.original);
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
      {data.map((image) => {
        return (
          <div class="container">
            <img
              className="carousel__images"
              draggable={false}
              src={image}
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
            <div class="inner__title">{props.tite}</div>
          </div>
        );
      })}
    </Carousel>
  );
}

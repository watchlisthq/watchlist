import "./Home.css";

export default function Home() {
  return (
    <div>
      <div class="main__container">
        <div class="main__title">
          <span class="title">Your Watchlist</span>
        </div>
        <div class="recommended__title">
          <span class="recommended">Recommended for you</span>
        </div>
        <div class="recommended__carousel">
          <a href="">
            <img
              src={require("../images/temp.png")}
              class="carousel__images"
            ></img>
          </a>
          <a href="">
            <img
              src={require("../images/temp.png")}
              class="carousel__images"
            ></img>
          </a>
          <a href="">
            <img
              src={require("../images/temp.png")}
              class="carousel__images"
            ></img>
          </a>
          <a href="">
            <img
              src={require("../images/temp.png")}
              class="carousel__images"
            ></img>
          </a>
          <a href="">
            <img
              src={require("../images/temp.png")}
              class="carousel__images"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

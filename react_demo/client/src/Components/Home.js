import "./Home.css";

import Slides from "./Slides";

export default function Home(props) {
  return (
    <div>
      <div class="main__container">
        <div class="main__title">
          <span class="title">Your Watchlist</span>
        </div>
        <div class="main__carousel">
          <Slides 
            watchlist={props.watchlist}
            onSave={props.onSave}/>
        </div>
        <div class="recommended__title">
          <span class="recommended">Recommended for you</span>
        </div>
        <div class="recommended__carousel">
          <Slides watchlist={props.watchlist} />
        </div>
      </div>
    </div>
  );
}

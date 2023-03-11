import "./Home.css";

import Slides from "./Slides";

export default function Home(props) {
  console.log(props.recs)
  return (
    <div>
      <div class="main__container">
        <div class="main__title">
          <span class="title">Your Watchlist</span>
        </div>
        <div class="main__carousel">
          <Slides 
            list={props.watchlist}
            onSave={props.onSave}
            closeable={true}
          />
        </div>
          <div class="recommended__title">
            <span class="recommended">Recommended for you</span>
          </div>
          <div class="recommended__carousel">
            <Slides
              list={({ data: props.recs })}
            />
          </div>
      </div>
    </div>
  );
}

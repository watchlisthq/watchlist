import { searchGenre } from "../api/find";
import "./Home.css";

import Slides from "./Slides"

<<<<<<< Updated upstream
export default function Home(props) {
=======
const result1 = await searchGenre("18");
//onData(result1);
const result2 = await searchGenre("35");
//onData(result2);
const result3 = await searchGenre("2");
//onData(result3);


export default function Home() {
>>>>>>> Stashed changes
  return (
    <div>
      <div class="main__container">
        <div class="main__title">
          <span class="title">Your Watchlist</span>
        </div>
        <div class="main__carousel">
          <Slides data={props.watchlist.data}/>
        </div>
        <div class="genre1-title">
          <span class="genre1">Drama</span>
        </div>
<<<<<<< Updated upstream
        <div class="recommended__carousel">
          <Slides data={props.watchlist.data}/>
=======
        <div class="genre1__carousel">
          <Slides/>
        </div>
        <div class="genre2-title">
          <span class="genre2">Comedy</span>
        </div>
        <div class="genre2__carousel">
          <Slides/>
        </div>
        <div class="genre3-title">
          <span class="genre3">Film Noir</span>
        </div>
        <div class="genre3__carousel">
          <Slides/>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

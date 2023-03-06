import { searchGenre } from "../api/find";
import "./Home.css";

import Slides from "./Slides";

export async function readGenre1() {
  let fetchData = async() => {
    let result = await searchGenre("18");
    return result
  }
  return await fetchData();
}

export default function Home(props) {
  return (
    <div>
      <div class="main__container">
        <div class="main__title">
          <span class="title">Your Watchlist</span>
        </div>
        <div class="main__carousel">
          <Slides data={props.watchlist.data} />
        </div>
        <div class="genre1-title">
          <span class="genre1">Drama</span>
        </div>
        <div class="recommended__carousel">
          <Slides data={props.genre1.data}/>
        </div>
      </div>
    </div>
  );
}

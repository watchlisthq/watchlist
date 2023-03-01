import "./search.css";

function Result(props) {
  return (
    <div class="search__element">
      <div class="search__image">{props.image}</div>
      <div class="search__inner">
        <div class="search__title">{props.title}</div>
        <div class="search__description">{props.description}</div>
      </div>
    </div>
  );
}

function search() {
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
      <div class="search__container">
        <Result image="image" title="title" description="description"></Result>
      </div>
    </div>
  );
}

export default search;

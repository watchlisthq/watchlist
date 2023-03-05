import "./Results.css";

export default function Results(props) {
  return (
    <div class="search__container">
        {props.query.map(element => 
          <Result 
            image={element.backdropURLs.original} 
            title={element.title} 
            description={element.overview}>
          </Result>)}
    </div>
  );
}

function Result(props) {
  return (
    <div class="search__element">
      <div class="search__image">
        <img src={props.image} alt="poster" width="331" height="auto"></img>
        </div>
      <div class="search__inner">
        <div class="search__title">{props.title}</div>
        <div class="search__description">{props.description}</div>
      </div>
    </div>
  );
}
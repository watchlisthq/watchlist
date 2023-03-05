import "./Results.css";

export default function Results(props) {
  return (
    <div class="results__container">
      {props.query.map((element) => (
        <Result
          image={element.backdropURLs.original}
          title={element.title}
          description={element.overview}
        ></Result>
      ))}
    </div>
  );
}

function addTitle() {
  var img = document.getElementById("buttonImage");
  img.src = `{require("../images/check-title.png")}`;
  return false;
}

function Result(props) {
  return (
    <div class="results__element">
      <div class="results__image">
        <img src={props.image} alt="poster" width="331" height="auto"></img>
      </div>
      <div class="results__inner">
        <div class="title__inner">
          <div class="results__title">{props.title}</div>
          <div class="results__description">{props.description}</div>
        </div>
        <button id="buttonImage" onclick="addTitle()">
          <img id="buttonImage" src={require("../images/add-title.png")}></img>
        </button>
      </div>
    </div>
  );
}

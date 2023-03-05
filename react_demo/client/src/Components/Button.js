import "./Button.css";

export default function Button(props) {
  return (
      <button className="buttonImage"
        id={props.data.imdbId}>
        <img src={require("../images/add-title.png")}></img>
      </button>
  )
}
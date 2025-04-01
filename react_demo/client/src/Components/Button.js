import "./Button.css";

export default function Button(props) {
  const addTitle = () => {
    let newSave = props.watchlist;
    // Add title
    if (!props.checked) {
      newSave.data.push(props.data);
      props.onRender(true);
    }
    // Remove title
    else {
      let filteredArray = newSave.data.filter(
        (e) => e.imdbId !== props.data.imdbId
      );
      newSave.data = filteredArray;
      props.onSave(newSave);
      props.onRender(true);
    }
  };

  return (
    <button
      className="buttonImage"
      id={props.data.imdbId}
      onMouseDown={addTitle}
    >
      {!props.checked && !props.render ? (
        <img src={require("../images/add-title.png")}></img>
      ) : (
        <img src={require("../images/check-title.png")}></img>
      )}
    </button>
  );
}

import React, { useState, useEffect } from "react";
// import { useAsync } from "react-async"

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";

import { readData } from "./api/save";

export default function App() {
  const [save, setSave] = useState("");
  const [data, setData] = useState(null);
  const [isSearching, setSearching] = useState(false);

  useEffect(() => {
    async function loadSave() {
      setSave(await readData());
    }
    console.log("fired");
    loadSave();
  }, [])

  return (
    <div>
      <Navigation onData={setData} onSearch={setSearching} />
      {!isSearching ? <Home watchlist={save}/> : <Results query={data} />}
    </div>
  );
}
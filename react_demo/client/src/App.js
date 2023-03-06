import React, { useState, useEffect } from "react";

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
    loadSave();
  }, [])

  return (
    <div>
      <Navigation onData={setData} onSearch={setSearching} />
      {!isSearching ? 
        <Home watchlist={save}/> 
        : 
        <Results query={data} watchlist={save} onSave={setSave}/>
      }
    </div>
  );
}
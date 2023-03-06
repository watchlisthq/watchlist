import React, { useState, useEffect } from "react";
// import { useAsync } from "react-async"

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";

import { readData } from "./api/save";
import { readGenre1 } from "./Components/Home";

export default function App() {
  const [save, setSave] = useState("");
  const [data, setData] = useState(null);
  const [genre1, setGenre1] = useState(true);
  const [genre2, setGenre2] = useState(true);
  const [genre3, setGenre3] = useState(true);
  const [isSearching, setSearching] = useState(false);

  useEffect(() => {
    async function loadSave() {
      setSave(await readData());
    }
    console.log("fired");
    loadSave();
  }, [])

  useEffect(() => {
    async function loadGenre1() {
      setGenre1(await readGenre1());
    }
    console.log("fired");
    loadGenre1();
  }, [])

  return (
    <div>
      <Navigation onData={setData} onSearch={setSearching} />
      {!isSearching ? <Home watchlist={save} Home genre1 = {genre1}/> 
      : <Results query={data} />}
    </div>
  );
}
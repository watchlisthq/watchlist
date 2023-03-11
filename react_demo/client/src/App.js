import React, { useState, useEffect } from "react";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";

import { readData } from "./api/save";
import { readRecs, searchGenre } from "./api/find";

export default function App() {
  const [data, setData] = useState("");
  const [isSearching, setSearching] = useState(false);

  const [save, setSave] = useState(null);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function loadSave() {
      setSave(await readData());
    }
    loadSave();
  }, []);

  useEffect(() => {
    async function chooseTitles() {
      let genres = readRecs(save.data);
      setTitles(await searchGenre(genres[Math.floor(Math.random() * genres.length)]));
    }
    chooseTitles();
  }, [save]);

  useEffect(() => {
    console.log(save)
  }, [save]);

  return (
    <div>
      <Navigation onData={setData} onSearch={setSearching}/>
      {!isSearching ?
        <Home watchlist={save} recs={titles} onSave={setSave}/> 
        : 
        <Results query={data} watchlist={save} onSave={setSave}/>
      }
    </div>
  );
}
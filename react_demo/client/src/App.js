import React, { useState, useEffect } from "react";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";

import { readData } from "./api/save";
import { readRecs, searchGenre } from "./api/find";

export default function App() {
  const [data, setData] = useState("");
  const [save, setSave] = useState("");
  const [recommended, setRecs] = useState("");
  const [titles, setTitles] = useState("");
  const [isSearching, setSearching] = useState(false);


  const [render, rerender] = useState(false);

  useEffect(() => {
    if (render === true) rerender(false);
  }, [render]);

  useEffect(() => {
    async function loadSave() {
      setSave(await readData());
    }
    loadSave();
  }, []);

  useEffect(() => {
    async function loadRecs() {
      setRecs(await readRecs(save.data));
    }
    loadRecs();
  }, [save]);

  useEffect(() => {
    async function chooseTitles() {
      // let genres = recommended.slice(0, 1);
      // let recs = [];
      // genres.forEach(async genre => {
      //   recs.push(await searchGenre(genre))
      // })
      // setTitles(recs);
      setTitles(await searchGenre(recommended[0]));
    }
    chooseTitles();
  }, [recommended]);

  useEffect(() => {
    console.log(titles);
    rerender(true);
  }, [titles]);

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
import React, { useState, useEffect } from "react";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";

import { readData } from "./api/save";
import { readRecs, searchGenre } from "./api/find";

export default function App() {
  const [data, setData] = useState("");
  const [route, setRoute] = useState("home");

  const [save, setSave] = useState({ data: [] });
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
      genres.slice(0, 1).forEach(async (genre) => {
        let newTitles = [...titles];
        newTitles.unshift(await searchGenre(genre));
        setTitles(newTitles);
      });
    }
    chooseTitles();
  }, [save, route]);

  let result;

  if (route === "home") {
    result = <Home watchlist={save} recs={titles} onSave={setSave} />;
  } else if (route === "results") {
    result = <Results query={data} watchlist={save} onSave={setSave} />;
  } else if (route === "shows") {
    result = "";
  } else if (route === "movies") {
    result = "";
  }

  return (
    <div>
      <Navigation onData={setData} onRoute={setRoute} />
      {result}
    </div>
  );
}

import './App.css';

import React, { useState, useEffect } from 'react';
import { searchTitle, filterStreaming } from "./search.js";

function App() { 

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("change");
  }, [data]);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      const search = document.getElementById("searchInput").value;
      const result = await searchTitle(search);
      setData(result);
      setLoading(false);
    }
  }

  return (
    <div>
      <div class="header">
        <div class="search">
            <label>Search for a genre, title, etc.</label>
            <input type="text" onKeyDown={handleKeyDown} id="searchInput"/>
        </div>
      </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        data.map(result => <p>{result.title}</p>)
      )}
    </div>
  );
}

export default App;

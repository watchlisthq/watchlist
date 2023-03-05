import React, { useState, useEffect } from "react"

import Home from "./Components/Home"
import Navigation from "./Components/Navigation"
import Results from "./Components/Results"


function App() {
  const [data, setData] = useState(null);
  const [isSearching, setSearching] = useState(false);

  return (
    <div>
      <Navigation onData={setData} onSearch={setSearching}/>
      {!isSearching ? 
      (
        <Home/>
      ) : (
        <Results query={data}/>
      )}
    </div>
  );
}

export default App;

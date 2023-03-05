import React, { useState, useEffect } from "react"

import Home from "./Components/Home"
import Navigation from "./Components/Navigation"
import Results from "./Components/Results"


function App() {
  const [data, setData] = useState(null);
  const [isSearching, setSearching] = useState(false);

  document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar__container");
    const navbarHeight = 80;
    const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);
    if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
    else navbar.classList.remove("fixed-top");
  });

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

import React from "react";
import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Weather Planet App</h1>
      <br />
      <Weather city="London" />
    </div>
  );
}

export default App;

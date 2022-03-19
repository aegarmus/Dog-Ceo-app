import React from "react";
import "./App.css";
import SelectBreed from "./components/selectBreed";
import { Cards } from "./components/Cards";

function App() {
  return (
    <div className="app">
      <h1>Doggy App</h1>
      <SelectBreed />
    </div>
  );
}

export default App;

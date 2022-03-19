import React from "react";
import "./App.css";
import SelectBreed from "./components/selectBreed";

function App() {
  return (
    <div className="app">
      <h1 className="title-app">Doggy App</h1>
      <SelectBreed />
    </div>
  );
}

export default App;

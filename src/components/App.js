import React from "react";
import ChopButton from "./chopButton";
import MineButton from "./mineButton";
import Inventory from "./inventory";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Inventory />
        <ChopButton />
        <MineButton />
      </header>
    </div>
  );
}

export default App;

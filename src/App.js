import React, { useState } from "react";
import { ActionContext } from "./Context/ActionContext";
import ChopButton from "./components/Woodcutting/chopButton";
import MineButton from "./components/mineButton";
import Inventory from "./components/inventory";

function App() {
  const [activeSkill, setActiveSkill] = useState('')
  const [actionActive, setActionActive] = useState(false)
  const [logCount, setLogCount] = useState(0)
  const [oreCount, setOreCount] = useState(0)

  return (
    <div className="App">
      <ActionContext.Provider value={{ actionActive, setActionActive, activeSkill, setActiveSkill, logCount, setLogCount, oreCount, setOreCount }}>
        <Inventory />
        <ChopButton />
        <MineButton />
      </ActionContext.Provider>
    </div>
  );
}

export default App;

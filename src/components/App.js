import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  const [sushis, setSushis] = useState([]);
  const [displayedSushis, setDisplayedSushis] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [ budget, setBudget ] = useState(100)

  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
      .then((res) => res.json())
      .then((sushis) => {
        setSushis(sushis);
        setDisplayedSushis(sushis.slice(0, 4));
      });
  }, []);

  function moreSushiClick() {
    const endIndex = startIndex + 4;
    const nextSushi = sushis.slice(startIndex, endIndex);
    setStartIndex(endIndex);
    setDisplayedSushis(nextSushi);
  }

  function addEmptyPlate() {
    const updatedPlates = [...plates, {}]
    setPlates(updatedPlates)
  }

  return (
    <div className="app">
      <SushiContainer addEmptyPlate={addEmptyPlate} moreSushiClick={moreSushiClick} displayedSushis={displayedSushis} budget={budget} setBudget={setBudget} />
      <Table budget={budget} setBudget={setBudget} plates={plates} />
    </div>
  );
}

export default App;

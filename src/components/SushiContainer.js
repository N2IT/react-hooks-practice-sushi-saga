import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({
  moreSushiClick,
  displayedSushis,
  budget,
  setBudget,
  addEmptyPlate }) {


  return (
    <div className="belt">
      {displayedSushis.map((sushi) => (
        <Sushi budget={budget} setBudget={setBudget} sushi={sushi} key={sushi.id} addEmptyPlate={addEmptyPlate} />
      ))}
      <MoreButton moreSushiClick={moreSushiClick} />
    </div>
  );
}

export default SushiContainer;

import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ 
  moreSushiClick,
  displayedSushis,
  addEmptyPlate }) {
  

  return (
    <div className="belt">
      {displayedSushis.map((sushi) => (
        <Sushi sushi={sushi} key={sushi.id} addEmptyPlate={addEmptyPlate} />
      ))}
      <MoreButton moreSushiClick={moreSushiClick} />
    </div>
  );
}

export default SushiContainer;

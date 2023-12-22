import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer(props) {
  const [ sushis, setAsSushis ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then((res) => res.json())
    .then((sushis) => setAsSushis(sushis))
  }, [] )
  

  return (
    <div className="belt">
      {sushis.slice(0, 4).map((sushi) => (
        <Sushi sushi={sushi} key={sushi.id} />
      ))}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;

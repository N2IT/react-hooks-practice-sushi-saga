import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer(props) {
  const [sushis, setSushis] = useState([]);
  const [displayedSushis, setDisplayedSushis] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

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

  return (
    <div className="belt">
      {displayedSushis.map((sushi) => (
        <Sushi sushi={sushi} key={sushi.id} />
      ))}
      <MoreButton moreSushiClick={moreSushiClick} />
    </div>
  );
}

export default SushiContainer;

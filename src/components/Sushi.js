import React, { useState } from "react";

function Sushi({ sushi }) {
  const { id, name, img_url, price, created_at } = sushi
  const [ eatSushi, setAsEatenSushi ] = useState(false)

  function handleClick() {
    setAsEatenSushi(!eatSushi)
  }

  return (
    <div key={id} className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eatSushi ? null : (
          <img
            src={img_url}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
 
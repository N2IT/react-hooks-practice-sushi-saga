import React, { useState } from "react";

function Sushi({ sushi, addEmptyPlate, budget, setBudget }) {
  const { id, name, img_url, price, created_at } = sushi
  const [eatenSushi, setAsEatenSushi] = useState(false)


  function handleSushiClick() {
    if (eatenSushi === false && budget >= price) {
      const updatedBudget = budget - price
      setAsEatenSushi(!eatenSushi)
      addEmptyPlate()
      setBudget(updatedBudget)
    } else { }
  }

  return (
    <div key={id} className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eatenSushi ? null : (
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

import React from "react";

function Sushi({ sushi }) {
  const { id, name, img_url, price, created_at } = sushi

  function handleClick() {
    console.log('clicked')
  }

  return (
    <div key={id} className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img_url}
            alt={{name} + "Sushi"}
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

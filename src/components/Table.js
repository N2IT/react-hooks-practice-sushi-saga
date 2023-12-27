import React, { useState } from "react";

function Table({ plates = [], budget, setBudget }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const [newFunds, setNewFunds] = useState(0)
  
  function handleChange(e){
    setNewFunds(parseFloat(e.target.value))
  }

  
  function addedFundsSubmit(e) {
    e.preventDefault()
    const newBudget = budget + newFunds
    setBudget(newBudget)
    setNewFunds(0)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <form onSubmit={addedFundsSubmit}>
        <input 
        type="number" 
        onChange={handleChange} 
        id="funds" 
        step="1.00"
        value={newFunds} 
        placeholder='Additional Funds are Available'></input>
        <button type="submit">Add Funds</button>
      </form>
    </>
  );
}

export default Table;

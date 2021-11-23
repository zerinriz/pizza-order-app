import React, { useState } from "react";
import { create, update } from "./../order/api-order";

function IngredientsList({ name, id }) {
  const [value, setValue] = useState([]);

  function addIngredients() {
    if (document.getElementById(id).checked) {
      setValue(document.getElementById(id).value);
      console.log(value);
    }
  }
  return (
    <div className="form-check">
      <input
        onClick={addIngredients}
        className="form-check-input"
        type="checkbox"
        value={name}
        id={id}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        <h6>{name}</h6>
      </label>
    </div>
  );
}

export default IngredientsList;

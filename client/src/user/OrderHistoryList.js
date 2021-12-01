import React from "react";

function OrderHistoryList({ dough, ingredients, price, counter, time }) {
  const timestamp = moment.utc(time).format("DD/MM/YYYY, h:mm:ss");

  return (
    <div className="col-sm-6">
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-text text-center">Dough: {dough}</h5>
          <h6 className="card-text text-center">
            Ingredients: {ingredients.toString()}
          </h6>
          <h6 className="card-text text-center">Price: {price}$</h6>
          <h6 className="card-text text-center">Amount: {counter}</h6>
          <h6 className="card-text text-center">Time: {timestamp}h</h6>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryList;

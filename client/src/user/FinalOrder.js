import React, { useState } from "react";
import { useSelector } from "react-redux";
import FinalOrderList from "./FinalOrderList";

function FinalOrder() {
  const finalOrder = useSelector((state) => state.finalorder);

  return (
    <div>
      <div className="scroll" style={{ maxHeight: "230px" }}>
        <div className="row">
          {finalOrder.map((item, index) => (
            <FinalOrderList
              dough={item[0].dough}
              ingredients={item[1].ingredients}
              price={item[2].price}
              counter={item[3].amount}
              key={index}
            />
          ))}
        </div>
      </div>
      <button
        style={{ position: "absolute", bottom: "-190px", left: "0px" }}
        type="button"
        className="btn btn-primary btn-md btn-block"
        onClick={() => alert("You have placed your order!")}
      >
        Order
      </button>
    </div>
  );
}

export default FinalOrder;

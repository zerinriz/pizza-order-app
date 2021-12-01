import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../redux/actions/index";
import FinalOrderList from "./FinalOrderList";

function FinalOrder() {
  const finalOrder = useSelector((state) => state.finalorder);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!finalOrder.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, []);

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
        style={{ position: "absolute", bottom: "0px", left: "0px" }}
        disabled={disable}
        type="button"
        className="btn btn-primary btn-md btn-block"
        onClick={() => {
          dispatch(actions.addCount(1));
          alert("You have successfully ordered!");
          setTimeout(() => {
            window.location = "http://localhost:3000/";
            dispatch(actions.addCount(0));
          }, 1000);
        }}
      >
        Order
      </button>
    </div>
  );
}

export default FinalOrder;

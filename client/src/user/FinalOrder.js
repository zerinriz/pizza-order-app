import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../redux/actions/index";
import FinalOrderList from "./FinalOrderList";

function FinalOrder() {
  const finalOrder = useSelector((state) => state.finalorder);
  const finalSum = useSelector((state) => state.finalSum);
  const [disable, setDisable] = useState(false);
  const [sumOfAll, setSumOfAll] = useState(0);
  const [track, setTrack] = useState(0);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (finalSum.length >= 2) {
      setTrack(track + 1);
    }
  }, []);

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
              sumOfAll={sumOfAll}
              track={track}
              setTrack={setTrack}
              setSumOfAll={setSumOfAll}
              finalSum={finalSum}
              dough={item[0].dough}
              ingredients={item[1].ingredients}
              price={item[2].price}
              amount={item[3].amount}
              key={index}
            />
          ))}
        </div>
      </div>
      <button
        style={{ position: "absolute", bottom: "0%", left: "0px" }}
        disabled={disable}
        type="button"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        className="btn btn-primary btn-md btn-block"
        onClick={() => {
          dispatch(actions.addCount(1));
          setTimeout(() => {
            window.location = "http://localhost:3000/";
            dispatch(actions.addCount(0));
          }, 1500);
        }}
      >
        Order
      </button>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">You have placed an order!</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FinalOrder;

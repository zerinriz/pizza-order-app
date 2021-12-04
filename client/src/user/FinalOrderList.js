import React, { useEffect, useLayoutEffect, useState } from "react";
const axios = require("axios");
import { useSelector, useDispatch } from "react-redux";
import baseUrl from "../config";
import * as actions from "./../redux/actions/index";

function FinalOrderList({
  dough,
  ingredients,
  price,
  amount,
  finalSum,
  sumOfAll,
  setSumOfAll,
  track,
}) {
  const count = useSelector((state) => state.count);
  const [counter, setCounter] = useState(amount);
  const sum = price * counter;
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    finalSum[1] = sum;
  }, [counter]);

  useEffect(() => {
    dispatch(actions.addAmount(sumOfAll + 5));
  }, [sumOfAll]);

  useEffect(() => {
    setSumOfAll(finalSum.reduce((a, b) => a + b, 0));
  }, [counter]);

  function decrement() {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    if (count === 1) {
      addFinalOrder();
    }
  }, [count]);

  async function addFinalOrder() {
    var token = sessionStorage.getItem("token");
    const tokenParse = JSON.parse(token);
    const userId = tokenParse.user._id;
    await axios.post(
      `${baseUrl}/orders`,

      {
        dough: dough,
        ingredients: ingredients,
        price: price,
        counter: counter,
        userId: userId,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <div className="col-sm">
      <div className="card" style={{ margin: "5px", width: "15rem" }}>
        <div className="card-body">
          <h5 className=" text-center">Dough: {dough}</h5>
          <h6 className=" text-center">
            Ingredients: {ingredients.toString()}
          </h6>
          <h6 className=" text-center">Price: {price}</h6>
          <div className="btn-group" style={{marginLeft:"30%"}}>
            <button
              type="button"
              className="btn-sm btn-primary"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
            <h6
              className="border border-secondary"
              style={{
                width: "25px",
                height: "25px",
                textAlign: "center",
                margin: "5px",
              }}
            >
              {counter}
            </h6>
            <button
              type="button"
              className="btn-sm btn-primary"
              onClick={decrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalOrderList;

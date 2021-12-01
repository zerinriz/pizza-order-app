import React, { useEffect } from "react";
const axios = require("axios");
import { useSelector } from "react-redux";

import baseUrl from "../config";

function FinalOrderList({ dough, ingredients, price, counter }) {
  const count = useSelector((state) => state.count);
  console.log(count);

  useEffect(() => {
    if (count === 1) {
      console.log("1");
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
          <h6 className=" text-center">Ingredients: {ingredients}</h6>
          <h6 className=" text-center">Price: {price}</h6>
          <h6 className=" text-center">Amount: {counter}</h6>
        </div>
      </div>
    </div>
  );
}

export default FinalOrderList;

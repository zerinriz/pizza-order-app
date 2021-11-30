import React, { useEffect } from "react";
const axios = require("axios");
import baseUrl from "../config";

function FinalOrderList({ dough, ingredients, price, counter }) {
  useEffect(() => {
    addFinalOrder();
  }, []);

  async function addFinalOrder() {
    var token = sessionStorage.getItem("token");
    const tokenParse = JSON.parse(token);
    const userId = tokenParse.user._id;
    await axios
      .post(
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
      )
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
        console.log(list);
      });
  }
  return (
    <div className="col-sm">
      <div className="card" style={{ margin: "5px", width: "15rem" }}>
        <div className="card-body" >
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

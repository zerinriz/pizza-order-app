import React, { useState } from "react";
import TextList from "./TextList";
import * as actions from "./../redux/actions/index";
import { useDispatch } from "react-redux";
import auth from "./../auth/auth-helper";
const axios = require("axios");

function OrderList({ dough, ingredients, price }) {
  const [counter, setCounter] = useState(1);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const sumPrice = price * counter;

  function onClick() {
    dispatch(actions.addFinalOrder(dough, ingredients, sumPrice, counter));
    dispatch(actions.addAmount(sumPrice));
    setDisable(true);
  }

  function decrement() {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="col-sm-12">
      <div className="card w-90" style={{ marginBottom: "10px" }}>
        <h6 className="card-header" style={{ textAlign: "center" }}>
          {dough}
          {"  "}
          {sumPrice}$
        </h6>

        <div className="card-body">
          {ingredients.map((item, index) => (
            <TextList item={item} key={index} />
          ))}
          <p className="card-text" style={{ float: "left" }}></p>
        </div>
        <div
          className="card-footer text-center"
          style={{ margin: "0", padding: "5px" }}
        >
          <div className="btn-group">
            <button
              disabled={disable}
              type="button"
              className="btn-sm btn-primary"
              onClick={() => setCounter(counter + 1)}
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
              disabled={disable}
              type="button"
              className="btn-sm btn-primary"
              onClick={decrement}
            >
              -
            </button>
            {!auth.isAuthenticated() && (
              <div data-toggle="modal" data-target="#myModal2">
                <button
                  style={{ marginLeft: "5px" }}
                  type="button"
                  className="btn-sm btn-primary"
                  disabled={disable}
                >
                  Confirm
                </button>
              </div>
            )}
            {auth.isAuthenticated() && (
              <button
                style={{ marginLeft: "5px" }}
                type="button"
                className="btn-sm btn-primary"
                disabled={disable}
                onClick={onClick}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;

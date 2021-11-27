import React, { useState } from "react";
import TextList from "./TextList";
import * as actions from "./../redux/actions/index";
import { useDispatch } from "react-redux";

function OrderList({
  dough,
  ingredients,
  price,
  orderList,
  setOrderList,
}) {
  const [counter, setCounter] = useState(1);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const sumPrice = price * counter;

  function onClick() {
    dispatch(actions.addFinalOrder(dough, ingredients, sumPrice, counter));
    setDisable(true);
  }
  
  const deleteHandler = () => {
    setOrderList(orderList.filter((el) => el[3].orderID !== orderList[0][3].orderID));
    console.log(orderList);
  };

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
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
            <button
              type="button"
              className="btn-sm btn-primary"
              disabled={disable}
              onClick={onClick}
            >
              Confirm
            </button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;

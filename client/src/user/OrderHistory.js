import React, { useEffect, useState } from "react";
import { listOrders } from "./../order/api-order";
import OrderHistoryList from "./OrderHistoryList";
const axios = require("axios");

function OrderHistory() {
  const [list, setList] = useState([]);
  const userId = window.location.pathname.match(/^\/orderHistory\/(.+)/)[1];
  useEffect(() => {
    listOrders(userId).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setList(data.data);
        console.log(list);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="container-fluid" style={{ margin: "15px" }}>
        <div
          className="card bg-light"
          style={{ width: "690px", height: "745.341px" }}
        >
          <div
            className="scroll"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          >
            <div className="row">
              {list.map((item, index) => (
                <OrderHistoryList
                  dough={item.dough}
                  ingredients={item.ingredients}
                  price={item.price}
                  counter={item.counter}
                  time={item.time}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;

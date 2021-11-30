import React, { useEffect, useState } from "react";
import { listOrders } from "./../order/api-order";
import OrderHistoryList from "./OrderHistoryList";
const axios = require("axios");

function OrderHistory() {
  const [list, setList] = useState([]);
  const userId = window.location.pathname.match(/^\/orderHistory\/(.+)/)[1];
  console.log(userId);
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
    <div className="container-fluid">
    <div className="card">
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
  );
}

export default OrderHistory;

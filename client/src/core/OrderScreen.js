import React, { useState, useEffect } from "react";
import { listOrders } from "./../order/api-order";
import OrderList from "./OrderList";

function OrderScreen() {
  const [listOfOrder, setListOfOrder] = useState([]);

  useEffect(() => {
    listOrders().then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setListOfOrder(data);
        console.log(data);
      }
    });
  }, []);

  return (
    <div class="row">
      {listOfOrder.map((item) => (
        <OrderList price={item.price} name={item.name} order={item.order}/>
      ))}
    </div>
  );
}
export default OrderScreen;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import OrderList from "./OrderList";

function OrderScreen() {
  const order = useSelector((state) => state.order);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setOrderList(order);
  }, [order]);
  
  console.log(orderList);
  return (
    <div className="row">
      {orderList.map((item, index) => (
        <OrderList
          orderList={orderList}
          setOrderList={setOrderList}
          dough={item[0].name}
          price={item[2].price}
          ingredients={item[1].ingredients}
          orderID={item[3].orderID}
          key={index}
        />
      ))}
    </div>
  );
}
export default OrderScreen;

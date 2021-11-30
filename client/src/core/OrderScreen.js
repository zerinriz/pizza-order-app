import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FinalSum from "./FinalSum";
import OrderList from "./OrderList";

function OrderScreen() {
  const order = useSelector((state) => state.order);
  const amount = useSelector((state) => state.amount);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setOrderList(order);
  }, [order, amount]);

  const sum = amount.reduce((a, b) => a + b, 0);
  const finalSum = sum + 5;

  return (
    <div>
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
      <FinalSum finalSum={finalSum} />
    </div>
  );
}
export default OrderScreen;

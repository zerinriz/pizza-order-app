import React, { useState, useEffect } from "react";
import { listDough } from "./../order/api-order";
import Dough from "./Dough";
import OrderScreen from "./OrderScreen";
import "./.././assets/styles/index.css";

const Home = () => {
  const [listOfDough, setListOfDough] = useState([]);
  const [buyDough, setBuyDough] = useState([]);

  useEffect(() => {
    listDough().then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setListOfDough(data);
        console.log(data);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="container-fluid" style={{ margin: "15px" }}>
        <div className="row row-eq-height">
          <div
            className="col p-3 border bg-light"
            style={{ marginRight: "5px" }}
          >
            <h3>Pick a dough</h3>
            {listOfDough.map((item) => (
              <Dough
                buyDough={buyDough}
                setBuyDough={setBuyDough}
                key={item._id}
                desc={item.desc}
                name={item.name}
                type={item.dough}
              />
            ))}
          </div>
          <div
            className="col p-3 border bg-light position-relative"
            style={{ marginLeft: "5px", maxHeight: "740px" }}
          >
            <h3>Order</h3>
            <OrderScreen />
            <button
              id="read-more"
              className="btn btn-primary  position-absolute"
              style={{ bottom: "15px", right: "15px" }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { listDough } from "./../order/api-order";
import Dough from "./Dough";
import OrderScreen from "./OrderScreen";
import "./.././assets/styles/index.css";
import auth from "./../auth/auth-helper";
import { Link } from "react-router-dom";

const Home = () => {
  const [listOfDough, setListOfDough] = useState([]);

  useEffect(() => {
    listDough().then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setListOfDough(data);
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
                gluten={item.gluten_free}
                key={item._id}
                desc={item.desc}
                name={item.name}
                type={item.dough}
                price={item.price}
              />
            ))}
          </div>
          <div
            className="col p-3 border bg-light position-relative"
            style={{ marginLeft: "5px" }}
          >
            <h3>Order</h3>
            <div className="scroll" style={{ maxHeight: "75%" }}>
              <OrderScreen />
              {auth.isAuthenticated() && (
                <Link to={"/user/" + auth.isAuthenticated().user._id}>
                  <button
                    id="read-more"
                    className="btn btn-primary  position-absolute"
                    style={{ width: "100px", bottom: "15px", right: "15px" }}
                  >
                    Buy
                  </button>
                </Link>
              )}
              {!auth.isAuthenticated() && (
                <div data-toggle="modal" data-target="#myModal2">
                  <h6 className="form-text text-center">
                    <button
                      id="read-more"
                      className="btn btn-primary  position-absolute"
                      style={{ width: "100px", bottom: "15px", right: "15px" }}
                    >
                      Buy
                    </button>
                  </h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

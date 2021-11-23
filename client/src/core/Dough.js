import React, { useState,useEffect } from "react";
import { create, listOrders } from "./../order/api-order";
import { Link } from "react-router-dom";

function Dough({ desc, name }) {
  const [orderId, setOrderId] = useState([]);

  useEffect(() => {
    console.log("1")
    listOrders().then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setOrderId(data);
        console.log(data[1]._id)
      }
    });
  }, []);

  const clickSubmit = () => {
    const dough = {
      name: name || undefined,
      order: [],
    };
    create(dough);
    console.log(dough);
  };

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  return (
    <div className="card w-100" style={{ marginBottom: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link to={`/api/orders/${orderId}`}>
          <button
            style={{ float: "right" }}
            type="button"
            className="btn btn-primary"
            data-toggle="tooltip"
            data-placement="top"
            title="Add ingredients"
            data-toggle="modal"
            data-target="#ingredientsModal"
            onClick={clickSubmit}
          >
            +Add
          </button>
        </Link>
        <p className="card-text">{desc} </p>
      </div>
    </div>
  );
}

export default Dough;

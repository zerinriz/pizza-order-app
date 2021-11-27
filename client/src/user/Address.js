import React, { useState, useEffect } from "react";
import AddressList from "./AddressList";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../redux/actions/index";
import { listAddress } from "./../order/api-order";

const axios = require("axios");
import baseUrl from "../config";

function Address() {
  const [show, setShow] = useState(true);
  const [floor, setFloor] = useState(0);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [list, setList] = useState([]);
  const addressRedux = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const myObj = sessionStorage.getItem("token");
  const user = JSON.parse(myObj);
  
  function onSubmit() {
    dispatch(actions.addAdress(address, floor));
  }

  async function addAddress() {
    console.log("1");
    await axios
      .post(
        `${baseUrl}/address`,
        { address: address, floor: floor },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        console.log("2");
        setList(res.data.data);
        console.log(list);
      });
  }

  useEffect(() => {
    listAddress().then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setList(data);
        console.log(data);
      }
    });
  }, []);


  return (
    <div
      className="container"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Address to deliver</h5>
          <div className="row">
            {addressRedux.map((item, index) => (
              <AddressList address={item[0].address} key={index} />
            ))}
            <div className="col-sm-4">
              {show && (
                <div className="card" id="hoverCard">
                  <a
                    className="card-block stretched-link text-decoration-none"
                    onClick={() => setShow(false)}
                  >
                    <div className="card-body">Add new adress</div>
                  </a>
                </div>
              )}
              {!show && (
                <div className="card">
                  <a className="card-block link text-decoration-none">
                    <div className="card-body">
                      <span>
                        <div className="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-sm"
                            >
                              Address
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-sm"
                            >
                              Floor
                            </span>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(e) => setFloor(e.target.value)}
                          />
                        </div>

                        <div
                          style={{
                            float: "right",
                            marginTop: "-10px",
                            marginBottom: "5px",
                          }}
                        >
                          <button
                            className="btn-sm btn-primary"
                            onClick={addAddress}
                            style={{ marginRight: "5px" }}
                          >
                            Add
                          </button>
                          <button
                            className="btn-sm btn-secondary"
                            onClick={() => setShow(true)}
                          >
                            Close
                          </button>
                        </div>
                      </span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="card" style={{ height: "600px" }}>
        <div className="card-body">
          <h5 className="card-title">Payment</h5>
        </div>
        <div className="card-footer">
          <div className="container">
            <h6 style={{ float: "left" }}>Total:</h6>
          </div>
          <div className="container">
            <h6 style={{ float: "right" }}>5$</h6>
          </div>
          <div
            className="form-group"
            style={{ position: "relative", marginBottom: "0px" }}
          >
            <label
              htmlFor="exampleFormControlTextarea1"
              style={{ position: "absolute" }}
            >
              Notes:
            </label>
            <textarea
              style={{
                marginLeft: "10%",
                width: "80%",
                marginBottom: "10px",
                marginTop: "5%",
              }}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <div
              className="container"
              style={{ maxWidth: "150px", marginBottom: "5px" }}
            >
              <button
                type="button"
                className="btn btn-primary btn-md btn-block"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;

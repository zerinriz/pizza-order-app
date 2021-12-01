import React, { useState, useEffect } from "react";
import AddressList from "./AddressList";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../redux/actions/index";
import { listAddress } from "./../order/api-order";
import baseUrl from "../config";
import FinalOrder from "./FinalOrder";
const axios = require("axios");

function Address() {
  const [show, setShow] = useState(true);
  const [floor, setFloor] = useState(0);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [list, setList] = useState([]);
  var token = sessionStorage.getItem("token");
  const tokenParse = JSON.parse(token);
  const userId = tokenParse.user._id;
  const dispatch = useDispatch();
  dispatch(actions.addUserId(userId));
  const finalSum = useSelector((state) => state.finalSum);

  async function addAddress() {
    await axios
      .post(
        `${baseUrl}/address`,
        { address: address, floor: floor, userId: userId },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
        console.log(list);
      });
  }

  useEffect(() => {
    listAddress(userId).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setList(data.data);
        console.log(list);
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
          <div className="scroll" style={{ maxHeight: "150px" }}>
            <div className="row">
              {list.map((item, index) => (
                <AddressList
                  address={item.address}
                  floor={item.floor}
                  key={index}
                />
              ))}
              <div className="col-sm">
                {show && (
                  <div
                    id="hoverCard"
                    className="card"
                    style={{
                      margin: "5px",
                      width: "15rem",
                      height: "5rem",
                    }}
                  >
                    <a onClick={() => setShow(false)}>
                      <div className="card-body text-center">
                        Add new adress
                      </div>
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
      </div>
      <div className="card" style={{ height: "570px" }}>
        <div className="card-body">
          <h5 className="card-title">Payment</h5>
          <div
            className="card-body"
            style={{ position: "relative", height: "87%" }}
          >
            <FinalOrder />
          </div>
          <h4 style={{ textAlign: "center" }}>Total: {finalSum}$</h4>
        </div>
        <div
          className="card-footer"
          style={{ height: "30%", position: "relative" }}
        >
          <div
            className="container-fluid"
            style={{ position: "absolute", top: "0px" }}
          >
            <div className="form-group" style={{ position: "relative" }}>
              <label
                htmlFor="exampleFormControlTextarea1"
                style={{ position: "absolute", left: "-15px" }}
              >
                <h6 style={{ float: "left" }}>Notes:</h6>
              </label>
              <textarea
                style={{
                  marginLeft: "10%",
                  width: "80%",
                  marginBottom: "20px",
                  marginTop: "6%",
                }}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <div
                className="container"
                style={{ maxWidth: "150px", marginBottom: "5px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;

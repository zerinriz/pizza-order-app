import React from "react";

function AddressList({ address, floor }) {
  return (
    <div className="col-sm">
      <div
        className="card"
        style={{ margin: "5px", width: "15rem" }}
      >
        <div className="card-body">
          <input
            style={{ left: "25px", top: "0px", position: "absolute" }}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />

          <p className=" text-center" style={{ marginTop: "-5px" }}>
            Address: {address}
          </p>
          <p className=" text-center" style={{ marginTop: "-20px" }}>
            Floor: {floor}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddressList;

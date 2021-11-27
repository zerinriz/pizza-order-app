import React from "react";

function AddressList({ address }) {
  return (
    <div className="col-sm">
      <div className="card" style={{ position: "relative" }}>
        <div className="card-body">
          <input
            style={{ left: "25px", top: "0px", position: "absolute" }}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />

          <div className="card-text text-center">{address}</div>
        </div>
      </div>
    </div>
  );
}

export default AddressList;

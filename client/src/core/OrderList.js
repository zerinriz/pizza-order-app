import React from "react";

function OrderList({ price, name, order }) {
  return (
    <div className="col-sm">
      <div className="card w-100" style={{ marginBottom: "10px" }}>
        <h6 className="card-header" style={{ textAlign: "center" }}>
          {name}
        </h6>

        <div className="card-body">
          <p className="card-text" style={{ float: "left" }}>
            {order}
          </p>
        </div>
        <h6
          className="card-footer text-center"
          style={{ margin: "0", padding: "1px" }}
        >
          {price} $
        </h6>
        <div
          class="card-footer text-center"
          style={{ margin: "0", padding: "5px" }}
        >
          <div class="btn-group">
            <button type="button" class="btn-sm btn-primary">
              +
            </button>
            <h6
              class="border border-secondary"
              style={{
                width: "25px",
                height: "25px",
                textAlign: "center",
                margin: "5px",
              }}
            >
              2
            </h6>
            <button type="button" class="btn-sm btn-primary">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;

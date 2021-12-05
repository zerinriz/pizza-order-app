import React from "react";

function OrderHistoryList({ fullOrder }) {
  const timestamp = (time) => {
    return moment.utc(time).format("DD/MM/YYYY, h:mm:ss");
  };

  return (
    <div className="col-sm-12 ">
      <div className="card text-center" style={{ margin: "10px" }}>
        <div className="row">
          {fullOrder.map((item, index) => (
            <div className="col-sm-6" key={index}>
              <div className="card-body" >
                <h5 className="card-text text-center">Dough: {item.dough} </h5>
                <h6 className="card-text text-center">
                  Ingredients: {item.ingredients.toString()}
                </h6>
                <h6 className="card-text text-center">Price: {item.price} $</h6>
                <h6 className="card-text text-center">Amount: {item.amount} </h6>
                <h6 className="card-text text-center">
                  Time:{timestamp(item.time)} h
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryList;

import Orders from "./../models/order.model";
import errorHandler from "../controllers/helpers/dbErrorHandler";
import _ from "lodash";

const create = (req, res, next) => {
  const orders = new Orders(req.body);
  orders.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.status(200).json({
      message: "Successfully added order!",
    });
  });
};

const listOrder = (req, res) => {
  Orders.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result);
  });
};

export default { listOrder, create };

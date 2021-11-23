import Order from "./../models/order.model";
import errorHandler from "../controllers/helpers/dbErrorHandler";
import _ from "lodash";

const create = (req, res, next) => {
  const order = new Order(req.body);
  order.save((err, result) => {
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
  Order.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result);
  });
};

export default { listOrder, create };

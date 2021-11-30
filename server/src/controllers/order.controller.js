import Orders from "./../models/order.model";
import User from "../models/user.model";

const createAddress = async (req, res, next) => {
  const { dough, ingredients, price, counter, userId } = req.body;

  let newOrder = new Orders({ dough, ingredients, price, counter });
  try {
    await newOrder.save();
  } catch (error) {
    res.status(500).json({ message: "Could not save order" });
    const err = new Error("Could not save order", 500);
    return next(err);
  }
  let user;
  try {
    user = await User.findById(userId);
  } catch (error) {
    console.log(error);
    return next(error);
  }
  user.orders.push(newOrder);
  await user.save();

  try {
    user = await User.findById(userId).populate("orders");
  } catch (error) {
    console.log(error);
  }
  console.log("napravio sam adresu");
  res.status(200).json({ orders: newOrder, data: user.orders });
};

const listOrders = async (req, res, next) => {
  const userId = req.url.match(/^\/orders\/(.+)/)[1];
  console.log(userId);
  let user;
  try {
    user = await User.findById(userId).populate("orders");
  } catch (error) {
    return next(error);
  }
  res.json({ data: user.orders });
};

export default { createAddress, listOrders };

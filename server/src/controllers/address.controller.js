import Address from "../models/address.model";
import User from "../models/user.model";

const createAddress = async (req, res, next) => {
  const { address, floor } = req.body;
  const id = req.userData.userId;
  console.log( req.userData.userId)
  let newAddress = new Address({ address, floor });
  try {
    await newAddress.save();
  } catch (error) {
    res.status(500).json({ message: "Could not save address" });
    const err = new Error("Could not save address", 500);
    return next(err);
  }
  let user;
  try {
    user = await User.findById(id);
  } catch (error) {
    console.log(error);
    return next(error);
  }
  user.address.push(newAddress._id);
  await user.save();
  try {
    user = await User.findById(id).populate("address");
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ address: newAddress, data: user.address });
};

const listAddress = (req, res) => {
  Address.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result);
  });
};

export default { createAddress, listAddress };

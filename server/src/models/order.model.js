import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    order: {
      type: Array,
    },
    price: {
      type: Number,
    },
    time: {
      type: Date,
      default: Date.now,
    },
    updated: Date,
  },
  {
    collection: "orders",
  }
);
export default mongoose.model("Order", orderSchema);

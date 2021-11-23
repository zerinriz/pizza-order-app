import mongoose from "mongoose";

const typesOfDoughSchema = new mongoose.Schema(
  {
    gluten_free: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  {
    collection: "typesOfDough",
  }
);
export default mongoose.model("Dough", typesOfDoughSchema);

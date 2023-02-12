import {model, Schema} from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("categories", categorySchema);

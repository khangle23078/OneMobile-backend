import {model, Schema, Types} from "mongoose";

const orderSchema = new Schema(
  {
    full_name: {
      type: String,
      require: true,
    },
    phone_number: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["pending,success,cancel"],
      default: "pending",
      require: true,
    },
    product_count: {
      type: Number,
      require: true,
    },
    total_pice: {
      type: Number,
      require: true,
    },
    products: {
      type: Types.ObjectId,
      require: true,
    },
    user_id: {
      type: Types.ObjectId,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("orders", orderSchema);

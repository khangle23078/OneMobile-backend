import { model, Schema, Types } from "mongoose";

const orderSchema = new Schema({
  full_name: {
    type: String,
    require: true,
  },
  phone_number: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["pending", "success", "cancel"],
    default: "pending",
    require: true,
  },
  description: {
    type: String,
    default: null
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
    type: Array,
    require: true
  },
  user: {
    type: Types.ObjectId,
    require: true,
  },
}, { timestamps: true });

export const Order = model("orders", orderSchema);

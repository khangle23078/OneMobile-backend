import { Schema, model, Types } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: Object,
      require: true,
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    quantity: {
      type: Number,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    origin_price: {
      type: Number,
      require: true,
    },
    sale_pice: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      require: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "categories",
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ name: "text" })

export default model("products", productSchema);

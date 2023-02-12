import {Schema, model, Types} from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    origin_price: {
      type: Number,
      require: true,
    },
    sale_pice: {
      type: Number,
    },
    desc: {
      type: String,
      require: true,
    },
    specs: {
      type: [
        {
          k: String,
          v: String,
        },
      ],
    },
    category_id: {
      type: Types.ObjectId,
      ref: "categories",
    },
  },
  {
    timestamps: true,
  }
);

export default model("products", productSchema);

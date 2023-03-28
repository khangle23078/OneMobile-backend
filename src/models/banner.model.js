import { model, Schema, Types } from "mongoose";

export const bannerSchema = new Schema({
  image: {
    url: String,
    public_id: String
  },
  product_id: {
    type: Types.ObjectId,
    ref: "products"
  }
}, {
  timestamps: true
})

export default model('banners', bannerSchema);
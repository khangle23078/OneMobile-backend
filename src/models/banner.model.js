import { model, Schema, Types } from "mongoose";

export const bannerSchema = new Schema({
  image: {
    url: String,
    public_id: String
  },
  product_link: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default model('banners', bannerSchema);
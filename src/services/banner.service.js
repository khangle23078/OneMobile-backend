import bannerModel from "../models/banner.model.js"

export const getAll = () => {
  return bannerModel.find();
}
import bannerModel from "../models/banner.model.js"

export const getAll = () => {
  return bannerModel.find();
}

export const insertOne = (data) => {
  return bannerModel.create(data)
}
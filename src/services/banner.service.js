import bannerModel from "../models/banner.model.js"

export const getAll = () => {
  return bannerModel.find();
}

export const insertOne = (data) => {
  return bannerModel.create(data)
}

export const updateById = (id, data) => {
  return bannerModel.findByIdAndUpdate(id, data, { new: true })
}
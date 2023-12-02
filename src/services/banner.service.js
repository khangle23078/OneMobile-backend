import bannerModel from "../models/banner.model.js"

export const getAll = () => {
  return bannerModel.find();
}

export const getById = (id) => {
  return bannerModel.findById(id);
}

export const insertOne = (data) => {
  return bannerModel.create(data)
}

export const updateById = (id, data) => {
  return bannerModel.findByIdAndUpdate(id, data, { new: true })
}

export const deleteById = (id) => {
  return bannerModel.findByIdAndDelete(id, { new: true })
}
import { Category } from "../models/category.model.js";

export const getAll = () => {
  return Category.find();
};

export const getById = (id) => {
  return Category.findById(id);
};

export const updateById = (id, data) => {
  return Category.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteById = (id) => {
  return Category.findByIdAndDelete(id, { new: true }).exec();
};

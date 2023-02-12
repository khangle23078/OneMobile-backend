import categoryModel from "../models/category.model.js";

export const getAll = () => {
  return categoryModel.find();
};

export const getById = (id) => {
  return categoryModel.findById(id);
};

export const updateById = (id, data) => {
  return categoryModel.findByIdAndUpdate(id, data, {new: true}).exec();
};

export const deleteById = (id) => {
  return categoryModel.findByIdAndDelete(id, {new: true}).exec();
};

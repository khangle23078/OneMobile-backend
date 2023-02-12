import categoryModel from "../models/category.model.js";

export const getAll = () => {
  return categoryModel.find();
};

export const getById = (id) => {
  return categoryModel.findById(id);
};

import categoryModel from "../models/category.model.js";

export const getAll = () => {
  return categoryModel.find();
};

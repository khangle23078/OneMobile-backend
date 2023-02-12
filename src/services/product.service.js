import productModel from "../models/product.model.js";

export const getAll = () => {
  return productModel.find();
};

export const getById = (id) => {
  return productModel.findById(id);
};

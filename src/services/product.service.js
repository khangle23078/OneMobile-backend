import productModel from "../models/product.model.js";

export const getAll = () => {
  return productModel.find();
};

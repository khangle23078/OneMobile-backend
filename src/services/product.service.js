import productModel from "../models/product.model.js";

export const getAll = (option) => {
  return productModel.find(option).populate('category', 'name');
};

export const getById = (id) => {
  return productModel.findById(id)
};

export const searchByName = (name) => {
  return productModel.find({ $text: { $search: name } })
}

export const updateById = (id, data) => {
  return productModel.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteById = (id) => {
  return productModel.findByIdAndDelete(id).exec();
};

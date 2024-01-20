import { Product } from "../models/product.model.js";

export const getAll = (limit, page) => {
  return Product.find().limit(limit).skip((page - 1) * limit)
    .populate('category', 'name')
    .exec();
};

export const getById = (id) => {
  return Product.findById(id)
};

export const searchByName = (name) => {
  return Product.find({ $text: { $search: name } })
}

export const updateById = (id, data) => {
  return Product.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteById = (id) => {
  return Product.findByIdAndDelete(id).exec();
};

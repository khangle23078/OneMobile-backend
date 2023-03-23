import orderModel from "../models/order.model.js";

export const getAll = () => {
  return orderModel.find();
};

export const getById = (id) => {
  return orderModel.findById(id);
}

export const insertOrder = (data) => {
  return orderModel.create(data);
}

export const updateStatusOrder = (id, data) => {
  return orderModel.findByIdAndUpdate(id, data, { new: true })
}


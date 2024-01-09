import { Order } from "../models/order.model.js";

export const getAll = () => {
  return Order.find();
};

export const getById = (id) => {
  return Order.findById(id);
}

export const insertOrder = (data) => {
  return Order.create(data);
}

export const updateStatusOrder = (id, data) => {
  return Order.findByIdAndUpdate(id, data, { new: true })
}


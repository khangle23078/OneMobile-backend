import orderModel from "../models/order.model.js";

export const getAll = () => {
  return orderModel.find();
};

export const insertOrder = (data) => {
  return orderModel.create(data);
}

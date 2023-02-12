import userModel from "../models/user.model.js";

export const checkExistUser = (email) => {
  return userModel.findOne({email: email});
};

export const findById = (id) => {
  return userModel.findById(id);
};

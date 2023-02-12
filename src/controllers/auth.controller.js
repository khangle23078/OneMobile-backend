import createHttpError from "http-errors";
import userModel from "../models/user.model.js";
import {checkExistUser} from "./../services/user.service.js";

export const register = async (req, res) => {
  try {
    const {email, password} = req.body;
    const existUser = await checkExistUser(email);

    if (existUser) {
      throw createHttpError[400]("Email was registed");
    }
    const user = new userModel({email, password});
    await user.save();
    res.status(200).json({
      status: 200,
      message: "Register user success",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: true,
      message: error.message,
    });
  }
};

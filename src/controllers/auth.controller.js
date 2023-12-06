import createHttpError from "http-errors";
import userModel from "../models/user.model.js";
import { checkExistUser } from "./../services/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "../helpers/jwt.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await checkExistUser(email);

    // check user exist
    if (existUser) {
      throw createHttpError[400]("Email was registed");
    }
    const user = new userModel({ email, password });
    await user.save();
    return res.status(200).json({
      status: 200,
      message: "Register user success!!",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: true,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await checkExistUser(email);
    // check user exist
    if (!existUser) {
      throw createHttpError[400]("Email doesn't exist");
    }
    //compare password current with hashed password in db
    const comparePassword = bcrypt.compare(password, existUser.password);
    if (!comparePassword) {
      throw createHttpError[400]("Password doesn't match");
    }

    const accessToken = generateAccessToken(existUser._id)

    const refreshToken = generateRefreshToken(existUser._id)
    return res.status(200).json({
      status: 200,
      data: {
        _id: existUser._id,
        email: email,
        role: existUser.role,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
      error: false,
      message: "Login user success!!",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: true,
      message: error.message,
    });
  }
};

export const createRefreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      throw createHttpError[401]('Bad request')
    }
    const { payload } = jwt.verify(refreshToken, process.env.SECRET_KEY);
    const accessToken = generateAccessToken(payload._id)
    const rfreshToken = generateRefreshToken(payload._id)
    return res.status(200).json({
      status: 200,
      data: {
        accessToken: accessToken,
        refreshToken: rfreshToken,
      },
      message: "Create accessToken success",
      error: false
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: true,
      message: error.message,
    });
  }
}
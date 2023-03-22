import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const generateAccessToken = (payload) => {
  return jwt.sign({ payload }, process.env.SECRET_KEY, {
    expiresIn: "1h"
  })
}

export const generateRefreshToken = (payload) => {
  return jwt.sign({ payload }, process.env.SECRET_KEY, {
    expiresIn: "30d"
  })
}
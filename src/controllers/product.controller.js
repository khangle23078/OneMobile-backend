import productModel from "../models/product.model.js";
import {
  deleteById,
  getAll,
  getById,
  updateById,
} from "./../services/product.service.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAll();
    res.status(200).json({
      status: 200,
      data: products,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await getById(id);
    res.status(200).json({
      status: 200,
      data: product,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new productModel(req.body);
    await product.save();
    res.status(200).json({
      status: 200,
      data: null,
      error: false,
      message: "Create product success",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const {id} = req.params;
    await updateById(id, req.body);
    res.status(200).json({
      status: 200,
      data: null,
      error: false,
      message: "Update product success",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const {id} = req.params;
    await deleteById(id);
    res.status(200).json({
      status: 200,
      data: null,
      error: false,
      message: "Delete product success",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    });
  }
};

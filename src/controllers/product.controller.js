import productModel from "../models/product.model.js";
import { v2 as cloudinary } from 'cloudinary'
import {
  deleteById,
  getAll,
  getById,
  searchByName,
  updateById,
} from "./../services/product.service.js";
import { Category } from './../models/category.model.js'

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

export const getProductsByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id })
    const products = await getAll({ category: category._id })
    return res.status(200).json({
      status: 200,
      data: products
    })
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    })
  }
}

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
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

export const searchProductByName = async (req, res) => {
  try {
    const { q } = req.query;
    console.log(q);
    const products = await searchByName(q);
    console.log(products);
    return res.status(200).json({
      status: 200,
      error: false,
      data: products
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
      data: null
    })
  }
}

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
    const { id } = req.params;
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
    const { id } = req.params;
    const product = await getById(id);
    console.log(product);
    await cloudinary.uploader.destroy(product?.image.public_id)
    await deleteById(id);
    res.status(200).json({
      status: 200,
      data: product,
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

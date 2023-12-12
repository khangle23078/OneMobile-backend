import { Category } from "../models/category.model.js";
import {
  deleteById,
  getAll,
  getById,
  updateById,
} from "../services/category.service.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await getAll();
    res.status(200).json({
      status: 200,
      data: categories,
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

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getById(id);
    res.status(200).json({
      status: 200,
      data: category,
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

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(200).json({
      status: 200,
      data: null,
      error: false,
      message: "Create category success",
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

export const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await updateById(id, req.body);
    res.status(200).json({
      status: 200,
      data: null,
      error: false,
      message: "Update category success",
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

export const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    res.status(200).json({
      status: 200,
      data: null,
      error: false,
      message: "Delete category success",
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

import {getAll} from "../services/category.service.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await getAll();
    res.status(200).json({
      status: 200,
      data: categories,
      error: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: error.message,
    });
  }
};

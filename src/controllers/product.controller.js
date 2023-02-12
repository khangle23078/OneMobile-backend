import {getAll} from "./../services/product.service.js";

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

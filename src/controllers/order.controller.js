import { getAll, insertOrder, updateStatusOrder } from "./../services/order.service.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await getAll().populate('products');
    res.status(200).json({
      status: 200,
      data: orders,
      error: false,
      message: null,
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

export const createOrder = async (req, res) => {
  try {
    const data = req.body;
    await insertOrder(data);
    res.status(200).json({
      status: 200,
      error: false,
      message: 'Create order success',
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    });
  }
}

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await updateStatusOrder(id, { status: status })
    res.status(200).json({
      status: 200,
      error: false,
      message: 'Update order success',
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: true,
      message: error.message,
    });
  }
}

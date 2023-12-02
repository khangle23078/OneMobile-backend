import { getAll, getById, insertOne, updateById, deleteById } from './../services/banner.service.js'

export const getBanners = async (req, res) => {
  try {
    const banners = await getAll();
    return res.status(200).json({
      status: 200,
      data: banners,
      error: false
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: false,
      message: error.message,
      data: null
    })
  }
}

export const getBanner = async (req, res) => {
  const { id } = req.params;
  try {
    const banner = await getById(id);
    console.log(banner);
    res.status(200).json({
      status: 200,
      data: banner,
      error: false
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: false,
      message: error.message,
      data: null
    })
  }
}


export const createBanner = async (req, res) => {
  try {
    const data = req.body;
    await insertOne(data);
    res.status(200).json({
      status: 200,
      error: false,
      message: "Create banner success"
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: true,
      message: error.message
    })
  }
}

export const updateBannerById = async (req, res) => {
  try {
    const { id } = req.params;
    await updateById(id, req.body);
    res.status(200).json({
      status: 200,
      error: false,
      message: "Update banner success"
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: true,
      message: error.message
    })
  }
}

export const deleteBannerById = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    res.status(200).json({
      status: 200,
      error: false,
      message: "Delete banner success"
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: true,
      message: error.message
    })
  }
}
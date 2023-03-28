import { getAll } from './../services/banner.service.js'

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
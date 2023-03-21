import { v2 as cloudinary } from 'cloudinary';

export const uploadImage = async (req, res) => {
  try {
    const image = req.file;
    console.log(image);
    return res.status(200).json({
      status: 200,
      image: {
        url: image.path,
        public_id: image.filename
      },
      message: "Upload image success"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}

export const deleteImage = async (req, res) => {
  try {
    const { public_id } = req.body;
    await cloudinary.uploader.destroy(public_id);
    return res.status(200).json({
      status: 200,
      message: "Delete image success"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}

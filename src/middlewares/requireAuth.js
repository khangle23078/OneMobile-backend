import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        message: "Unauthorization"
      })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next()
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
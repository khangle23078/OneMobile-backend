import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
  try {
    const token = req.headers['authorization'].replace('Bearer', '');
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "Unauthorization"
      })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    req.user = decoded;
    return next()
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorization"
    })
  }
}
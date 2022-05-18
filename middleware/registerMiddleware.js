import User from "../models/userModel";
import createSendToken from "../utils/authController";

const registerMiddleware = (handler) => {
  return async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      createSendToken(newUser, 200, res, req);
      return handler(req, res);
    } catch (error) {
      return res.status(500).json({ status: "fail", message: error.message });
    }
  };
};

export default registerMiddleware;

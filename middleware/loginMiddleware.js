import User from "../models/userModel";
import { verifyToken } from "../utils/authController";

const loginMiddleware = (handler) => {
  return async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = req.cookies.jwt;
      req.tokenVerified = false;

      if (token) {
        const verifiedToken = await verifyToken(token);

        if (verifiedToken) {
          req.tokenVerified = true;
          return handler(req, res);
        } else {
          req.tokenVerified = false;
        }
      }

      // 1) Check if the eamil and password exists
      if (!email || !password) {
        console.log("Email check");
        console.log(req.tokenVerified);
        res.status(401).json({
          status: "fail",
          message: "Please provide an email and password",
        });
        return;
      }

      // 2) Check if the password exists
      const user = await User.findOne({ email }).select("+password");

      if (!user || !(await user.correctPassword(password, user.password))) {
        console.log("User check");
        res.status(401).json({
          status: "fail",
          message: " Please provide correct email or password",
        });
        return;
      }

      req.user = user;

      // 3) If everything is ok

      //
      return handler(req, res);
    } catch (error) {
      console.log("Error ran");
      console.log(error);
      res.status(500).json({ status: "fail", message: error.message });
      return;
    }
  };
};

export default loginMiddleware;

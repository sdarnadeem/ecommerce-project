import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import User from "../models/userModel";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    secure: false,
    httpOnly: false,
    sameSite: "strict",
    maxAge: 6000,
    path: "/",
  };

  user.password = undefined;
  res
    .setHeader("Set-Cookie", serialize("jwt", String(token), cookieOptions))
    .status(statusCode)
    .json({
      status: "success",
      data: {
        user,
      },
    });
};

export const verifyToken = async (token) => {
  if (!token) return false;

  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  const currUser = await User.findById(decoded.id);
  if (!currUser) {
    return false;
  }

  // 4) check if user changed password after the token was issued

  // if (currUser.changedPasswordAfter(decoded.iat)) {
  //   return false;
  // }
  //   req.user = currUser;
  return true;
};

export default createSendToken;

import loginMiddleware from "../../../../middleware/loginMiddleware";
import createSendToken from "../../../../utils/authController";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.user, "User check");
    if (req.tokenVerified === true) {
      res.status(302).json({ status: "success" });
    } else {
      createSendToken(req.user, 302, res);
    }
  } else {
    res.status(404).json({ message: "Only post request allowed" });
  }
}

export default loginMiddleware(handler);

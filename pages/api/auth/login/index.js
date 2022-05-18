import loginMiddleware from "../../../../middleware/loginMiddleware";
import createSendToken from "../../../../utils/authController";

async function handler(req, res) {
  if (req.method === "POST") {
    if (req.tokenVerified === true) {
      res.status(302).end();
    } else {
      createSendToken(req.user, 302, res);
    }
  } else {
    res.status(404).json({ message: "Only post request allowed" });
    return;
  }
}

export default loginMiddleware(handler);

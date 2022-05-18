import registerMiddleware from "../../../../middleware/registerMiddleware";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
    } else {
      return res.status(404).json({ message: "Only post request allowed" });
    }
  } catch (error) {
    console.log("error");
    return res.status(500).json({ status: "fail", message: error.message });
  }
}

export default registerMiddleware(handler);

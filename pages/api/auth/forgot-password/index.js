async function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.writeHead(302, { Location: "https://nasyxnadeem.dev" }).end();
    } else {
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "fail", message: error.message });
  }
}

export default handler;

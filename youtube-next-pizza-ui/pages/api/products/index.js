import product from "../../../util/models/product";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  const { method } = req;

  //CONNECT DB
  console.log("connecting....");
  dbConnect();
  console.log("db connected");
  if (method === "GET") {
    try {
      const AllProducts = await product.find({});
      res.status(200).json(AllProducts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const productt = await product.create(req.body);
      res.status(201).json(productt);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

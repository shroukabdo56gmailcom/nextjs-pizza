import product from "../../../util/models/product";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
    //3iza mn al req almethod w al ID ali gay x alquery
  const { method , query:{id} } = req;

  //CONNECT DB
  console.log("connecting....");
  dbConnect();
  console.log("db connected");

  if (method === "GET") {
    try {
      const oneProduct = await product.findById(id)
      res.status(200).json(oneProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
//   if (method === "PUT") {
//     try {
//       const productt = await product.create(req.body);
//       res.status(201).json(productt);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
//   if (method === "DELETE") {
//     try {
//       const productt = await product.create(req.body);
//       res.status(201).json(productt);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
}

import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
  async find(req: Request, res: Response) {
    try {
      const response = await ProductService.find(req, res);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const response = await ProductService.findOne(id);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const response = await ProductService.findAll(req, res);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  create(req: Request, res: Response) {
    ProductService.create(req, res);
  }
  delete(req: Request, res: Response) {
    ProductService.delete(req, res);
  }
  update(req: Request, res: Response) {
    ProductService.update(req, res);
  }

  // DetailList(req:Request,res:Response){
  //   ThreadService.DetailList(req,res)
  // }
}

export default new ProductController();

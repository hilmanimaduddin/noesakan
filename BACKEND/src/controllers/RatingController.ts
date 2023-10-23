import { Request, Response } from "express";
import RatingService from "../services/RatingService";

class RatingController {
  async find(req: Request, res: Response) {
    try {
      const response = await RatingService.find(req.query);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { rating } = req.body;
      const idStore = req.query.productId;
      const storeId = parseInt(idStore as string);
      const userId = res.locals.loginSession.id;
      const response = await RatingService.create(rating, storeId, userId);

      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new RatingController();

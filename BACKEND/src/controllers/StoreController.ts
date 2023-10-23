import { Request, Response } from "express";
import StoreService from "../services/StoreService";

class StoreController {
  //   find(req: Request, res: Response) {
  //     StoreService.find(req, res);
  //   }

  create(req: Request, res: Response) {
    StoreService.create(req, res);
  }

  findOne(req: Request, res: Response) {
    StoreService.findOne(req, res);
  }

  //   delete(req: Request, res: Response) {
  //     StoreService.delete(req, res);
  //   }

  update(req: Request, res: Response) {
    StoreService.update(req, res);
  }
}

export default new StoreController();

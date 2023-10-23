import { Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
  // find(req:Request,res:Response){
  //   AuthService.find(req,res)
  // }

  register(req: Request, res: Response) {
    AuthService.register(req, res);
  }
  login(req: Request, res: Response) {
    AuthService.login(req, res);
  }
  check(req: Request, res: Response) {
    AuthService.check(req, res);
  }
  // editProfile(req:Request,res:Response){
  //   const loginSession = res.locals.loginSession;
  //   AuthService.editProfile(req,res)
  //   return  res.status(200).json("Update Succes");
  // }
}
export default new AuthController();

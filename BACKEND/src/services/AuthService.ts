import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Thread } from "../entities/Thread";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { creatThreadSchema, loginThreadSchema } from "../utils/validators/joi";
import { User } from "../entities/User";

class AuthService {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async register(req: Request, res: Response) {
    try {
      const data = req.body;
      const { error, value } = creatThreadSchema.validate(data);

      if (error) {
        return res.status(500).json({
          error: error.details[0].message,
        });
      }

      const checkEmail = await this.authRepository.findOne({
        where: {
          email: value.email,
        },
      });

      if (checkEmail) {
        return res.status(400).json({
          error: "error email is already registered",
        });
      }

      const password = await bcrypt.hash(value.password, 10);

      const user = this.authRepository.create({
        name: value.name,
        username: value.username,
        email: value.email,
        password: password,
      });

      const createdUser = await this.authRepository.save(user);
      console.log("createdUser ini apa ya", createdUser);
      return res.status(200).json(createdUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = req.body;

      const { error, value } = loginThreadSchema.validate(data);
      if (error) {
        return res.status(400).json({ error: error });
      }

      const checkEmail = await this.authRepository.findOne({
        where: {
          email: value.email,
        },
        select: ["id", "name", "username", "email", "password", "image"],
      });

      if (!checkEmail) {
        return res.status(400).json("Error Email / password is wrong");
      }

      const password = await bcrypt.compare(
        value.password,
        checkEmail.password
      );
      if (!password) {
        return res.status(400).json({
          error: "Email/passwrod is wrong!",
        });
      }

      const user = {
        id: checkEmail.id,
        name: checkEmail.name,
        username: checkEmail.username,
        email: checkEmail.email,
        picture: checkEmail?.image,
      };

      const token = jwt.sign(user, "lalala", {
        expiresIn: "100000h",
      });

      return res.status(200).json({
        user,
        token,
      });
    } catch (error) {
      return res.status(500).json("Theres an error ");
    }
  }

  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const user = await this.authRepository.findOne({
        where: {
          id: loginSession.id,
        },
        select: ["id", "name", "username", "email", "password"],
      });

      return res.status(200).json({
        user,
        message: "Token is valid",
      });
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }

  // async editProfile(req: Request, loginSession:any) {
  //   try {
  //     const data = req.body;
  //     const checkEmail = await this.authRepository.findOne(
  //       {
  //           where : {
  //               email: loginSession.locals.loginSession.email,

  //           },
  //           select:["id", "name","username","email","password","image" ]
  //       },
  //     )
  //     if (!checkEmail){
  //       throw new Error("Error Email / password is wrong")
  //     }

  //     const user = this.authRepository.create({
  //     });

  //     // console.log("id nih service",loginSession.loginSession)
  //     const editProfile = await this.authRepository.save(user);
  //     return {
  //       message: "update profile Succes",
  //       editProfile
  //     }
  //   } catch (err) {
  //    throw new Error(err.message)
  //   }

  // }
}

export default new AuthService();

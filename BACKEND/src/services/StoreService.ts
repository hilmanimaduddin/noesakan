import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Store } from "../entities/Store";

class StoreService {
  private readonly storeRepository: Repository<Store> =
    AppDataSource.getRepository(Store);

  async find(reg: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const store = await this.storeRepository.findOne({
        relations: ["users"],
        where: {
          users: {
            id: loginSession.id,
          },
        },
      });

      return res.status(200).json(store);
    } catch (err) {
      return res.status(500).json({ error: "Error while getting threads" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const loginSession = res.locals.loginSession;

      const filename = req.file ? req.file.path : "";

      const store = this.storeRepository.create({
        name: data.name,
        userName: data.userName,
        province: data.province,
        city: data.city,
        district: data.district,
        description: data.description,
        phoneNumber: data.phoneNumber,
        age: parseInt(data.age),
        bankAccount: data.bankAccount,
        users: {
          id: loginSession.id,
        },
      });

      if (req.file !== undefined) {
        store.image = filename;
      }

      console.log("ini Store", store);

      const createStore = this.storeRepository.save(store);
      return res.status(200).json(createStore);
    } catch (err) {
      return res.status(500).json({ error: "sorry there was an error", err });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      // const id = parseInt(req.params.id);
      const threads = await this.storeRepository.findOne({
        // relations: ["user", "replies", "likes"],
        where: {
          users: {
            id: loginSession.id,
          },
        },
      });

      return res.status(200).json(threads);
    } catch (err) {
      return res.status(500).json({ error: "sorry there was an error" });
    }
  }

  //   async delete(req: Request, res: Response) {
  //     try {
  //       const id = parseInt(req.params.id);
  //       const thread = await this.storeRepository.delete(id);
  //       return res.status(200).json(thread);
  //     } catch (err) {
  //       return res.status(500).json({ error: "sorry there was an error" });
  //     }
  //   }

  async update(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const id = parseInt(req.params.id);

      const filename = res.locals.filename;

      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });

      let cloudinaryResponse = undefined;

      if (filename) {
        cloudinaryResponse = await cloudinary.uploader.upload(
          "./src/uploads/" + filename
        );
      }

      const store = await this.storeRepository.findOne({
        relations: ["users"],
        where: {
          users: {
            id: loginSession.id,
          },
        },
      });
      const data = req.body;
      if (data.name != "") {
        store.name = data.name;
      }
      if (data.userName != "") {
        store.userName = data.userName;
      }
      if (data.province != "") {
        store.province = data.province;
      }
      if (data.city != "") {
        store.city = data.city;
      }
      if (data.district != "") {
        store.district = data.district;
      }
      if (data.description != "") {
        store.description = data.description;
      }
      if (data.phoneNumber != "") {
        store.phoneNumber = data.phoneNumber;
      }
      if (data.age != "") {
        store.age = data.age;
      }
      if (data.bankAccount != "") {
        store.bankAccount = data.bankAccount;
      }
      if (filename) {
        store.image = cloudinaryResponse.secure_url;
      } else {
        store.image = data.image;
      }

      const updateThread = this.storeRepository.save(store);

      return res.status(200).json({ updateThread, message: "Updated" });
    } catch (err) {
      return res.status(500).json({ error: "sorry there was an error" });
    }
  }
}

export default new StoreService();

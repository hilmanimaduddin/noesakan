import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Thread } from "../entities/Thread";
import { Replies } from "../entities/Replies";
import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";

class ReplyService {
  private readonly replyRepository: Repository<Replies> =
    AppDataSource.getRepository(Replies);
  async find(reqQuery: any): Promise<any> {
    try {
      const threadId = parseInt(reqQuery.threadId ?? 0);
      const loginSession = reqQuery.loginSession;
      console.log("ini thread id", threadId);
      console.log("ini login session", loginSession);

      const reply = await this.replyRepository.find({
        relations: ["users"],
        where: {
          threads: {
            id: threadId,
          },
        },
        order: {
          id: "DESC",
        },
      });
      console.log("reply ser", reply);
      return reply;
    } catch (err) {
      throw new Error("Error find replys");
    }
  }
  // async findOne(req: Request, res: Response) {
  //   const id = parseInt(req.params.id)
  //   const reply = await this.replyRepository.findOne({
  //       where : {
  //           id : id,
  //           userId : res.locals.loginSession.id,
  //           threadId : res.locals.threadId,
  //       },

  //         relations:["user","thread"],

  //   })

  //   return res.status(200).json(reply);
  // }

  //   async create(reqBody: any, loginSession: any): Promise<any> {
  //     try {
  //       const reply = this.replyRepository.create({
  //         content: reqBody.content,
  //         users: {
  //           id: loginSession.id,
  //         },
  //         threads: {
  //           id: reqBody.threadId,
  //         },
  //       });

  //       await this.replyRepository.save(reply);
  //       return reply;
  //     } catch (err) {
  //       throw new Error(err.message);
  //     }
  //   }
  // }

  async create(dataResponse: any, idStore: any, req: Request) {
    const id = parseInt(idStore as string);
    const res = dataResponse;
    console.log({ res: res, id: idStore });

    try {
      const data = res;
      const loginSession = res.loginSession.id as number;

      const filename = req.file ? req.file.path : "";

      const store = this.replyRepository.create({
        content: data.content,
        threads: {
          id: id,
        },
        users: {
          id: loginSession,
        },
      });

      if (req.file !== undefined) {
        store.image = filename;
      }

      console.log("ini Store", store);

      const createStore = this.replyRepository.save(store);
      return res.status(200).json(createStore);
    } catch (err) {
      return res.status(500).json({ error: "sorry there was an error", err });
    }
  }
}
//     const filename = res.locals.filename
//     console.log("filename",filename)
//     const data =this.replyRepository.create ({
//       content:content,
//       threadId:,
//       userId:loginSession,

//     })
//     console.log("ini data boss",data)

//     const cloudinaryID = cloudinary.config({
//       cloud_name:"dk0jtenod",
//       api_key:"179758344782873",
//       api_secret:"5U9WfOhBlle6Khly9EmNQ9rBzu0"

//     })

//     const cloudinaryResponse = await  cloudinary.uploader.upload("./uploads/" + filename)

//     console.log("cloudinary apaan nih",cloudinaryResponse)

//     const thread = this.replyRepository.create({

//         content :data.content,
//         image : cloudinaryResponse.secure_url,
//         user:data.user
//         thread:data.thread
//     })

//     const createdThread = await this.replyRepository.save(thread)

//     return res.status(200).json("Posted");

export default new ReplyService();

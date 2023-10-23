import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Rating } from "../entities/Rating";
// import { threadId } from "worker_threads";

class RatingServices {
  private readonly ratingRepository: Repository<Rating> =
    AppDataSource.getRepository(Rating);

  async find(reqQuery: any): Promise<any> {
    try {
      const threadId = parseInt(reqQuery.productId ?? 0);
      console.log("ini thread id", threadId);

      const Rating = await this.ratingRepository.find({
        relations: ["stores", "users"],
        where: {
          product: {
            id: threadId,
          },
        },
      });
      return { Rating, true: "Ini rating" };
    } catch (err) {
      throw new Error("Something error");
    }
  }

  async create(
    rating: number,
    productId: number,
    userId: number
  ): Promise<any> {
    try {
      const isRating = await this.ratingRepository.count({
        where: {
          product: {
            id: productId,
          },
          users: {
            id: userId,
          },
        },
      });

      if (isRating > 0) {
        throw new Error("You already like this thread!");
      }

      const replies = this.ratingRepository.create({
        rating: rating,
        product: {
          id: productId,
        },
        users: {
          id: userId,
        },
      });
      const create = this.ratingRepository.save(replies);
      return { create, true: "bener nih" };
      //   return res.status(200).json({ create, true: "bener nih" });
    } catch (err) {
      return { error: "Something error", err };
      //   return res.status(500).json({ error: "Something error", err });
    }
  }
}

export default new RatingServices();

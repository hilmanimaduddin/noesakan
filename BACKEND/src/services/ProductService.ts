import { Repository } from "typeorm";

import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import { Store } from "../entities/Store";
class ProductService {
  private readonly productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);
  private readonly storeRepository: Repository<Store> =
    AppDataSource.getRepository(Store);

  async find(req: Request, res: Response) {
    try {
      const product = await this.productRepository.find({
        where: {
          stores: {
            users: {
              id: res.locals.loginSession.id,
            },
          },
        },
        relations: ["stores"],
        take: 10,
        order: {
          id: "DESC",
        },
      });
      return product.map((element) => ({
        id: element.id,
        productName: element.productName,
        price: element.price,
        stock: element.stock,
        image: element.image,
        createdAt: element.createdAt,
        store: element.stores,
        // stores: element.stores.name,
        // likesCount: element.likes.length,
        // isLiked: element.likes.some((like:any) => like.user.is === loginSession.id),
      }));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findOne(id: number, loginSession?: any): Promise<any> {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id: id,
        },
        relations: ["stores"],

        // relations: ["stores, users"],
      });
      return {
        id: product.id,
        productName: product.productName,
        price: product.price,
        description: product.description,
        stock: product.stock,
        image: product.image,
        createdAt: product.createdAt,
        store: product.stores,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const product = await this.productRepository.find({
        relations: ["stores"],
        take: 20,
        order: {
          id: "DESC",
        },
      });
      return product.map((element) => ({
        id: element.id,
        productName: element.productName,
        price: element.price,
        stock: element.stock,
        image: element.image,
        createdAt: element.createdAt,
        store: element.stores,
        // stores: element.stores.name,
        // likesCount: element.likes.length,
        // isLiked: element.likes.some((like:any) => like.user.is === loginSession.id),
      }));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // async findAll(req: Request, res: Response): Promise<any> {
  //   try {
  //     const product = await this.productRepository.find({
  //       relations: ["stores"],
  //       take: 20,
  //     });
  //     return product.map((element) => ({
  //       id: element?.id,
  //       productName: element?.productName,
  //       price: element?.price,
  //       description: element?.description,
  //       stock: element?.stock,
  //       image: element?.image,
  //       createdAt: element?.createdAt,
  //     }));
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // }

  async create(req: Request, res: Response) {
    const { productName, price, description, stock, image } = req.body;
    const filename = req.file ? req.file.path : "";

    const getStore = this.storeRepository.findOne({
      where: {
        users: {
          id: res.locals.loginSession.id,
        },
      },
    });

    const idStore = await getStore;

    try {
      const data = this.productRepository.create({
        productName: productName,
        price: price,
        description: description,
        stock: stock,
        image: image,
      });

      const product = this.productRepository.create({
        productName: data.productName,
        price: data.price,
        description: data.description,
        stock: data.stock,
        stores: {
          id: idStore.id,
        },
      });

      if (req.file !== undefined) {
        product.image = filename;
      }
      console.log("product", product);
      console.log("filename", filename);

      const createdProduct = await this.productRepository.save(product);

      return res.status(200).json(createdProduct);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
      const deletedThread = await this.productRepository.delete(id);
      return res.status(200).json(deletedThread);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const products = await this.productRepository.findOne({
      where: {
        id: id,
      },
    });
    const data = req.body;

    if (data.content != "") {
      products.productName = data.productName;
    }
    if (data.content != "") {
      products.price = data.price;
    }
    if (data.content != "") {
      products.stock = data.stock;
    }
    if (data.content != "") {
      products.description = data.des;
    }
    if (data.content != "") {
      products.image = data.image;
    }

    // console.log(threadz.content , threadz.image)

    const updatedProduct = this.productRepository.save(products);

    return res.status(200).json(updatedProduct);
  }
}

export default new ProductService();

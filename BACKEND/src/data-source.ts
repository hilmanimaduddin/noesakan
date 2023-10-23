import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { Rating } from "./entities/Rating";
import { Replies } from "./entities/Replies";
import { Store } from "./entities/Store";
import { Thread } from "./entities/Thread";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "containers-us-west-209.railway.app",
  port: 5581,
  username: "postgres",
  password: "B83sP6AsqMCTNmzl0EaL",
  database: "railway",
  synchronize: true,
  logging: false,
  entities: [Product, Rating, Replies, Store, Thread, User],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Store } from "./Store";
import { User } from "./User";
import { Product } from "./Product";

@Entity({ name: "ratings" })
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => Product, (product) => product.ratings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  product: Product;

  @ManyToOne(() => User, (user) => user.rating, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  users: User;
}

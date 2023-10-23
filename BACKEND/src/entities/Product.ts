import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Store } from "./Store";
import { Rating } from "./Rating";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column({ nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => Store, (store) => store.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  stores: Store;

  @OneToMany(() => Rating, (rating) => rating.rating)
  ratings: Rating[];
}

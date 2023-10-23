import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";
import { Rating } from "./Rating";

@Entity({ name: "stores" })
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userName: string;

  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  description: string;

  @Column()
  phoneNumber: string;

  @Column()
  age: number;

  @Column()
  bankAccount: string;

  @Column({ nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @OneToMany(() => Product, (product) => product.stores)
  products: Product[];

  @OneToOne(() => User, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  users: User;

  // @OneToOne(() => User, (user) => user.stores, { cascade: true })
  // @JoinColumn()
  // users: User;
}

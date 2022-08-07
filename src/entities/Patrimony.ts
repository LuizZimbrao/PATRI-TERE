import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import bcrypt from "bcryptjs";

import { v4 as uuid } from "uuid";

@Entity("patrimony")
class Patrimony {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  coordinates: string;

  @Column()
  owner: string;

  @Column()
  tumbling_date: string;

  @Column()
  patrimony_type: string;

  @Column()
  conservation: string;

  @Column()
  security_condition: string;

  @Column()
  historical_data: string;

  @Column()
  images: string;

  @Column()
  datails: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Patrimony;

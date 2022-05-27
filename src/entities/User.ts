import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from "typeorm";

import bcrypt from "bcryptjs";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  admin: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.admin) {
      this.admin = false
    }
  }
}

export default User;

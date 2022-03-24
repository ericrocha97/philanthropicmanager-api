import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("member")
export class Member {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  CID: string;

  @Column()
  address: string;

  @Column()
  CEP: string;

  @Column()
  phone: string;

  @Column()
  birthday: Date;

  @Column()
  level: number;

  @Column()
  active: boolean;

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

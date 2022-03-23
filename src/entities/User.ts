import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Member } from "./Member";

@Entity("user")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  memberId: string;

  @JoinColumn({ name: "memberId" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  member: Member;

  @Column()
  admin: boolean;

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

import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("calendar")
class Calendar {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  extra: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  type: string;

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

export { Calendar };

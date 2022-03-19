import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("entity_preferences")
export class EntityPreferences {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  administration: string;

  @Column()
  leader1: string;

  @Column()
  leader2: string;

  @Column()
  leader3: string;

  @Column()
  treasurer: string;

  @Column()
  clerk: string;

  @Column()
  president_work: string;

  @Column()
  president_philanthropy: string;

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

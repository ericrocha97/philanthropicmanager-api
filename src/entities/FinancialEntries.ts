import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("financial_entries")
class FinancialEntries {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  date: string;

  @Column("decimal", { precision: 10, scale: 2 })
  value: number;

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

export { FinancialEntries };

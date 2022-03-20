import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Member } from "./Member";

@Entity("entity_preferences")
export class EntityPreferences {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  administration: string;

  @Column()
  leader1: string;

  @JoinColumn({ name: "leader1" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  memberLeader1: Member;

  @Column()
  leader2: string;

  @JoinColumn({ name: "leader2" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  memberLeader2: Member;

  @Column()
  leader3: string;

  @JoinColumn({ name: "leader3" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  memberLeader3: Member;

  @Column()
  treasurer: string;

  @JoinColumn({ name: "treasurer" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  memberTreasurer: Member;

  @Column()
  clerk: string;

  @JoinColumn({ name: "clerk" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  memberClerk: Member;

  @Column()
  president_work: string;

  @JoinColumn({ name: "president_work" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  memberPresidentWork: Member;

  @Column()
  president_philanthropy: string;

  @JoinColumn({ name: "president_philanthropy" })
  @OneToOne(() => Member, { primary: true, cascade: true })
  memberPresidentPhilanthropy: Member;

  @Column()
  current: boolean;

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

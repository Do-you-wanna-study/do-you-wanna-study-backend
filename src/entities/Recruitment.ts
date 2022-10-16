import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { RecruitmentToTag } from './RecruitmentToTag';
import { Status } from './enums/enums';
import { User } from './User';
import { RecruitmentApply } from './RecruitmentApply';

@Entity('recruitment')
export class Recruitment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 100 })
  title: string;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ length: 10, default: 'recruiting' })
  status: Status;

  @Column({ nullable: false })
  recruitmentNumber: number;

  @Column({ nullable: false, length: 50 })
  region: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (User) => User.recruitmentList, {
    cascade: true,
    lazy: true
  })
  author: User;

  @OneToMany(() => RecruitmentToTag, (RecruitmentToTag) => RecruitmentToTag.recruitment, {
    cascade: true
  })
  recruitmentToTagList: RecruitmentToTag[];

  @OneToMany(() => RecruitmentApply, (RecruitmentApply) => RecruitmentApply.recruitment, {
    cascade: true
  })
  recruitmentApplyList: RecruitmentApply[];
}
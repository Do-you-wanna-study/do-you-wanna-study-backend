import { Column, ManyToOne, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Recruitment } from './Recruitment';

@Entity('recruitment_apply')
export class RecruitmentApply {
  @ManyToOne(() => User, (User) => User.recruitmentApplyList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  user: User;

  @ManyToOne(() => Recruitment, (Recruitment) => Recruitment.recruitmentApplyList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  recruitment: Recruitment;

  @Column({ nullable: false, length: 255 })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
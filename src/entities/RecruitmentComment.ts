import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Recruitment } from './Recruitment';

@Entity('recruitment_comment')
export class RecruitmentComment extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 255 })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (User) => User.recruitmentCommentList, {
    nullable: false,
    lazy: true,
  })
  user: User;

  @ManyToOne(() => Recruitment, (Recruitment) => Recruitment.recruitmentCommentList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  recruitment: Recruitment;
}

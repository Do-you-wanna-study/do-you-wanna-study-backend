import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, Entity, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
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
  @JoinColumn({name: "user_id"})
  user: User;

  @ManyToOne(() => Recruitment, (Recruitment) => Recruitment.recruitmentCommentList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  @JoinColumn({name: "recruitment_id"})
  recruitment: Recruitment;
}

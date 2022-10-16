import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Recruitment } from './Recruitment';
import { RecruitmentApply } from './RecruitmentApply';
import { RecruitmentComment } from './RecruitmentComment';
import { UserEvaluation } from './UserEvaluation';
import { UserToCommunity } from './UserToCommunity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true, nullable: false, length: 100 })
  email: string;

  @Column({ nullable: false, length: 6 })
  nickname: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  @Column({ name: 'is_deleted', width: 1, default: false })
  isDeleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Recruitment, (Recruitment) => Recruitment.author, {
    cascade: true
  })
  recruitmentList: Recruitment;

  @OneToMany(() => RecruitmentApply, (RecruitmentApply) => RecruitmentApply.user, {
    cascade: true
  })
  recruitmentApplyList: RecruitmentApply[];

  @OneToMany(() => UserToCommunity, (UserToCommunity) => UserToCommunity.user, {
    cascade: true
  })
  userToCommunityList: UserToCommunity[];

  @OneToMany(() => RecruitmentComment, (RecruitmentComment) => RecruitmentComment.user, {
    cascade: true
  })
  recruitmentCommentList: RecruitmentComment[];

  @OneToMany(() => UserEvaluation, (UserEvaluation) => UserEvaluation.toUser, {
    cascade: true
  })
  userEvaluationReceiverList: UserEvaluation[];

  @OneToMany(() => UserEvaluation, (UserEvaluation) => UserEvaluation.fromUser, {
    cascade: true
  })
  userEvaluationSenderList: UserEvaluation[];
}

import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { RecruitmentToTag } from './RecruitmentToTag';
import { Status } from './enums/enums';
import { User } from './User';
import { RecruitmentApply } from './RecruitmentApply';
import { Community } from './Community';
import { RecruitmentComment } from './RecruitmentComment';

@Entity('recruitment')
export class Recruitment extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 100 })
  title: string;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 10, default: 'recruiting' })
  status: Status;

  @Column({ nullable: false, name: 'recruitment_number' })
  recruitmentNumber: number;

  @Column({ nullable: true, length: 50 })
  region: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, default: null })
  deadline: Date;

  @ManyToOne(() => User, (User) => User.recruitmentList, {
    nullable: false,
    lazy: true,
  })
  @JoinColumn({ name: 'author_id' })
  author: User;

  @OneToMany(() => RecruitmentToTag, (RecruitmentToTag) => RecruitmentToTag.recruitment, {
    cascade: true,
  })
  @JoinColumn({ name: 'recruitment_to_tag' })
  recruitmentToTagList: RecruitmentToTag[];

  @OneToMany(() => RecruitmentApply, (RecruitmentApply) => RecruitmentApply.recruitment, {
    cascade: true,
  })
  recruitmentApplyList: RecruitmentApply[];

  @ManyToOne(() => Community, (Community) => Community.recruitmentList, {
    nullable: false,
    lazy: true,
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @OneToMany(() => RecruitmentComment, (RecruitmentComment) => RecruitmentComment.recruitment, {
    cascade: true,
  })
  @JoinColumn({ name: 'recruitment_comment' })
  recruitmentCommentList: RecruitmentComment[];
}

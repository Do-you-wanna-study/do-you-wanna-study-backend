import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StudyGroup } from './StudyGroup';
import { User } from './User';
import { PostType } from './enums/enums';
import { StudyGroupPostComment } from './StudyGroupPostComment';

@Entity('study_group_post')
export class StudyGroupPost extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 100 })
  title: string;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ type: 'varchar', name: 'post_type', default: 'normal', length: 10 })
  postType: PostType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => StudyGroup, (StudyGroup) => StudyGroup.studyGroupPostList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  studyGroup: StudyGroup;

  @ManyToOne(() => User, (User) => User.studyGroupPostList, {
    nullable: false,
    lazy: true,
  })
  user: User;

  @OneToMany(() => StudyGroupPostComment, (StudyGroupPostComment) => StudyGroupPostComment.studyGroupPost, {
    cascade: true,
  })
  studyGroupPostCommentList: StudyGroupPostComment[];
}

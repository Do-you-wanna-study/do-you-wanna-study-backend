import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { StudyGroupPost } from './StudyGroupPost';

@Entity('study_group_post_comment')
export class StudyGroupPostComment extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 255 })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (User) => User.studyGroupPostCommentList, {
            nullable: false,
        lazy: true
  })
  user: User;

  @ManyToOne(() => StudyGroupPost, (StudyGroupPost) => StudyGroupPost.studyGroupPostCommentList, {
        onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  studyGroupPost: StudyGroupPost;
}
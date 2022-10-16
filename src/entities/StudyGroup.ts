import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StudyGroupPost } from './StudyGroupPost';

@Entity('study_group')
export class StudyGroup extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'group_name', nullable: false, length: 10 })
  groupName: string;

  @Column({ name: 'start_date', type: 'date', nullable: false })
  startDate: Date;

  @Column({ nullable: false })
  period: number;

  @Column({ name: 'is_finished', width: 1, default: false })
  isFinished: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => StudyGroupPost, (StudyGroupPost) => StudyGroupPost.studyGroup, {
    cascade: true
  })
  studyGroupPostList: StudyGroupPost[];
}
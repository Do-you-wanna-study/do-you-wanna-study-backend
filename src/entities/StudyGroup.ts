import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StudyGroupPost } from './StudyGroupPost';
import { StudyGroupToUser } from './StudyGroupToUser';
import { StudyRetrospect } from './StudyRetrospect';
import { Community } from './Community';
import { User } from './User';

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
    cascade: true,
  })
  studyGroupPostList: StudyGroupPost[];

  @OneToMany(() => StudyGroupToUser, (StudyGroupToUser) => StudyGroupToUser.studyGroup, {
    cascade: true,
  })
  studyGroupToUserList: StudyGroupToUser[];

  @OneToMany(() => StudyRetrospect, (StudyRetrospect) => StudyRetrospect.studyGroup, {
    cascade: true,
  })
  studyRetrospectList: StudyRetrospect[];

  @ManyToOne(() => Community, (Community) => Community.studyGroupList, {
    nullable: false,
    lazy: true,
  
  })
  @JoinColumn({name: 'community_id'})
  community: Community;
}

import { Column, Entity, ManyToOne } from 'typeorm';
import { Role } from './enums/enums';
import { StudyGroup } from './StudyGroup';
import { User } from './User';

@Entity('study_group_to_user')
export class StudyGroupToUser {
  @Column({ default: 'follower', length: 10 })
  role: Role;

  @ManyToOne(() => StudyGroup, (StudyGroup) => StudyGroup.studyGroupToUserList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  studyGroup: StudyGroup;

  @ManyToOne(() => User, (User) => User.studyGroupToUserList, {
    nullable: false,
    lazy: true,
  })
  user: User;
}

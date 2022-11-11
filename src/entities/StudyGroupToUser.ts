import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './enums/enums';
import { StudyGroup } from './StudyGroup';
import { User } from './User';

@Entity('study_group_to_user')
export class StudyGroupToUser {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', default: 'follower', length: 10 })
  role: Role;

  @ManyToOne(() => StudyGroup, (StudyGroup) => StudyGroup.studyGroupToUserList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  @JoinColumn({name: "study_group_id"})
  studyGroup: StudyGroup;

  @ManyToOne(() => User, (User) => User.studyGroupToUserList, {
    nullable: false,
    lazy: true,
  })
  @JoinColumn({name: "user_id"})  
  user: User;
}

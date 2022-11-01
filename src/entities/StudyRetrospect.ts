import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StudyGroup } from './StudyGroup';
import { User } from './User';

@Entity('study_retrospect')
export class StudyRetrospect {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ nullable: false, length: 255 })
  content: string;

  @ManyToOne(() => StudyGroup, (StudyGroup) => StudyGroup.studyRetrospectList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  studyGroup: StudyGroup;

  @ManyToOne(() => User, (User) => User.studyRetrospectList, {
    nullable: false,
    lazy: true,
  })
  user: User;
}

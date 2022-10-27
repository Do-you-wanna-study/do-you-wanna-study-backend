import { ManyToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Recruitment } from './Recruitment';
import { Tag } from './Tag';

@Entity('recruitment_to_tag')
export class RecruitmentToTag {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @ManyToOne(() => Tag, (Tag) => Tag.recruitmentToTagList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  tag: Tag;

  @ManyToOne(() => Recruitment, (Recruitment) => Recruitment.recruitmentToTagList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  recruitment: Recruitment;
}

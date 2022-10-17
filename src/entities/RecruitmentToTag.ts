import { ManyToOne, Entity } from 'typeorm';
import { Recruitment } from './Recruitment';
import { Tag } from './Tag';

@Entity('recruitment_to_tag')
export class RecruitmentToTag {
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

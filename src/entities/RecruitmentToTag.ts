import { ManyToOne, Entity, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
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
  @JoinColumn({name: 'tag_id'})
  tag: Tag;

  @ManyToOne(() => Recruitment, (Recruitment) => Recruitment.recruitmentToTagList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  @JoinColumn({name: 'recruitment_id'})
  recruitment: Recruitment;
}

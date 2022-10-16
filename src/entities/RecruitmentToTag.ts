import { Column, ManyToOne, Entity} from 'typeorm';
import { Tag } from './Tag';

@Entity('recruitment_to_tag')
export class RecruitmentToTag {

    @ManyToOne(() => Tag, (Tag) => Tag.recruitmentToTagList, {
        cascade: true
    })
    tag: Tag;
}
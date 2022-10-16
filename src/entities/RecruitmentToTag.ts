import { ManyToOne, Entity} from 'typeorm';
import { Recruitment } from './Recruitment';
import { Tag } from './Tag';

@Entity('recruitment_to_tag')
export class RecruitmentToTag {

    @ManyToOne(() => Tag, (Tag) => Tag.recruitmentToTagList, {
        cascade: true
    })
    tag: Tag;

    @ManyToOne(() => Recruitment, (Recruitment) => Recruitment.recruitmentToTagList, {
        cascade: true
    })
    recruitment: Recruitment;
}
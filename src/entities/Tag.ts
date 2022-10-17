import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecruitmentToTag } from './RecruitmentToTag';

@Entity('tag')
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 20 })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => RecruitmentToTag, (RecruitmentToTag) => RecruitmentToTag.tag, {
    cascade: true,
  })
  recruitmentToTagList: RecruitmentToTag[];
}

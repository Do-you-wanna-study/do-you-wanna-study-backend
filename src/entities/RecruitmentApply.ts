import { Column, ManyToOne, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { User } from './User';
import { Recruitment } from './Recruitment';

@Entity('recruitment_apply')
export class RecruitmentApply {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, (User) => User.recruitmentApplyList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  @JoinColumn({name: "user_id"})
  user: User;

  @ManyToOne(() => Recruitment, (Recruitment) => Recruitment.recruitmentApplyList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  @JoinColumn({name: "recruitment_id"})
  recruitment: Recruitment;

  @Column({nullable: false, default: false})
  status: boolean

  @Column({ nullable: false, length: 255 })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Recruitment } from './Recruitment';
import { UserToCommunity } from './UserToCommunity';

@Entity('community')
export class Community extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 100 })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Recruitment, (Recruitment) => Recruitment.community, {
    cascade: true
  })
  recruitmentList: Recruitment[];

  @OneToMany(() => UserToCommunity, (UserToCommunity) => UserToCommunity.community, {
    cascade: true
  })
  userToCommunityList: UserToCommunity[];
}
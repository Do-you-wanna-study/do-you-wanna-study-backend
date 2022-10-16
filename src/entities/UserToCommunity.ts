import { Column, ManyToOne, Entity, CreateDateColumn } from 'typeorm';
import { User } from './User';
import { Community } from './Community';

@Entity('user_to_community')
export class UserToCommunity {
  @ManyToOne(() => User, (User) => User.userToCommunityList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  user: User;

  @ManyToOne(() => Community, (Community) => Community.userToCommunityList, {
    onDelete: 'CASCADE',
    nullable: false,
    lazy: true,
  })
  community: Community;

  @Column({ name: 'is_deleted', width: 1, default: false })
  isDeleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

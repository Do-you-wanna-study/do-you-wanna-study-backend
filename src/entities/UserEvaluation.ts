import { BaseEntity, Column, ManyToOne, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('user_evaluation')
export class UserEvaluation extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  skill: number;

  @Column({ nullable: false })
  kindness: number;

  @Column({ nullable: false })
  sincerity: number;

  @Column({ nullable: false })
  helpful: number;

  @Column({ nullable: false, length: 50 })
  title: string;

  @Column({ nullable: false, length: 255 })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (User) => User.userEvaluationReceiverList, {
    nullable: false,
    lazy: true,
  })
  @JoinColumn({ name: 'to_user' })
  toUser: User;

  @ManyToOne(() => User, (User) => User.userEvaluationSenderList, {
    nullable: false,
    lazy: true,
  })
  @JoinColumn({ name: 'from_user' })
  fromUser: User;
}

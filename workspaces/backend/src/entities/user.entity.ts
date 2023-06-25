import { Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Rating } from './rating.entity';

@Entity()
export class User {
  @PrimaryColumn()
  username: string;

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings: Rating[];
}

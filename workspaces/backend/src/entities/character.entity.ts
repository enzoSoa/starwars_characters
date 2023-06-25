import { Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Rating } from './rating.entity';

@Entity()
export class Character {
  @PrimaryColumn()
  url: string;

  @OneToMany(() => Rating, (rating) => rating.character)
  ratings: Rating[];
}

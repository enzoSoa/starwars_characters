import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from './character.entity';
import { User } from './user.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: number;

  @ManyToOne(() => Character, (character) => character.ratings, { eager: true })
  character: Character;

  @ManyToOne(() => User, (user) => user.ratings, { eager: true })
  user: User;
}

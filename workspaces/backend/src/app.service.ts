import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  private async retrieveUser(username: string) {
    let user = await this.userRepository.findOne({
      where: { username },
    });
    if (!user) user = await this.userRepository.save({ username });
    return user;
  }

  private async retrieveCharacter(url: string) {
    let character = await this.characterRepository.findOne({
      where: { url },
    });
    if (!character) character = await this.characterRepository.save({ url });
    return character;
  }

  async create(data: number, username: string, characterUrl: string) {
    const user = await this.retrieveUser(username);
    const character = await this.retrieveCharacter(characterUrl);

    let rating = await this.ratingRepository.findOne({
      where: { user, character },
    });

    if (rating) {
      rating.data = data;
    } else {
      rating = this.ratingRepository.create({ data, user, character });
    }

    return this.ratingRepository.save(rating);
  }

  async findAll() {
    return (await this.ratingRepository.find()).sort((a, b) => a.id - b.id);
  }
}

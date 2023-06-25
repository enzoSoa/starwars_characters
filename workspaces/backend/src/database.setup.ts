import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingsEntities } from './entities';

export const databaseSetup = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'starwars_ratings',
  entities: [...RatingsEntities],
  synchronize: true,
});

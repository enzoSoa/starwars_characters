import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseSetup } from './database.setup';
import { RatingsEntities } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [databaseSetup, TypeOrmModule.forFeature(RatingsEntities)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

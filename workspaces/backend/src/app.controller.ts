import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  createRatingRequestDTO,
  createRatingResponseDTO,
  getAllRatingsDTO,
} from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postRating(@Req() req): createRatingResponseDTO {
    const { data, username, characterUrl }: createRatingRequestDTO = req.body;
    if (!username || !characterUrl || !(data >= 0 && data <= 5))
      throw new BadRequestException(
        'A rating must have a username, a characterUrl and a data between 0 and 5',
      );

    return this.appService.create(data, username, characterUrl);
  }

  @Get()
  getAllRatings(): getAllRatingsDTO {
    return this.appService.findAll();
  }
}

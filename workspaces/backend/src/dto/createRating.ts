import { Rating } from '../entities/rating.entity';

export type createRatingRequestDTO = {
  data: number;
  characterUrl: string;
  username: string;
};

export type createRatingResponseDTO = Promise<Rating>;

import { CharacterReference } from ".";
import { User } from "./user";

export type Rating = {
    id: number;
    data: number;
    user: User;
    character: CharacterReference;
}

export type PostRatingDTO = {
    data: number;
    characterUrl: string;
    username: string;
}

export type RatingDTO = Rating[]
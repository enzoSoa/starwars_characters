import { RatingDTO } from "../../types";
import { RatingListCard } from "./RatingList.card";
import style from "./RatingList.module.css";

type Props = {
    ratings: RatingDTO;
}

export const RatingList = ({ratings}: Props) => <section className={style.grid}>
    {ratings.map((rating, index) => <RatingListCard rating={rating} key={index}/>)}
</section>;
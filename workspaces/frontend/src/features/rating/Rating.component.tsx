import { useContext } from "react";
import { usePostRatingMutation } from "../../api";
import { UsernameContext } from "../../context";
import style from "./Rating.module.css";
import { RatingStar } from "./Rating.star";

interface Props {
    characterUrl: string;
    currentValue?: number;
    username?: string;
}

export const RatingComponent = ({characterUrl, currentValue, username}: Props) => {
    const [postRating] = usePostRatingMutation();
    const { username: defaultUsername } = useContext(UsernameContext);
    const handleStarClick = (data: number) => postRating({data: 5-data, username: username ?? defaultUsername ?? "", characterUrl});

    return <section className={style.starsList}>
        {Array.from({length: 6}).map((_, i) => <RatingStar active={currentValue === 5-i} number={i} onClick={handleStarClick}/>)}
    </section> 
}
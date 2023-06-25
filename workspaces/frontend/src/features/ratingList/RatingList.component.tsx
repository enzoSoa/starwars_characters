import { useGetRatingsQuery } from "../../api";
import { RatingList } from "./RatingList.list";

export const RatingListComponent = () => {
    const {data} = useGetRatingsQuery();
    return <RatingList ratings={data?? []}/>;
};
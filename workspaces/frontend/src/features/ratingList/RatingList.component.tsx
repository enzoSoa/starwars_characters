import { useMemo } from "react";
import { useGetRatingsQuery } from "../../api";
import { RatingList } from "./RatingList.list";

type Props = {
    usernameFilter: string;
}

export const RatingListComponent = ({usernameFilter}: Props) => {
    const { data } = useGetRatingsQuery();
    const filteredData = useMemo(() => data?.filter(
        rating => new RegExp(usernameFilter.toLowerCase().replace("\\", "")).test(rating.user.username.toLowerCase())
    ), [data, usernameFilter]);
    return <RatingList ratings={filteredData ?? []}/>;
};
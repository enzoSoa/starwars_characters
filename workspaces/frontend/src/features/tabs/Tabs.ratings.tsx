import { Stack } from "react-bootstrap";
import { RatingListComponent } from "../ratingList/RatingList.component";
import { RatingListFilter } from "../ratingList/RatingList.filter";
import { useState } from "react";

export const TabRatings = () => {
    const [usernameFilter, setUsernameFilter] = useState("");
    return <Stack gap={1} style={{alignItems: "center"}}>
        <RatingListFilter value={usernameFilter} onFilterChange={setUsernameFilter}/>
        <RatingListComponent usernameFilter={usernameFilter} />
    </Stack>
}
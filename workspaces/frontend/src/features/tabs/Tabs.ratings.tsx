import { Stack } from "react-bootstrap";
import { RatingListComponent } from "../ratingList/RatingList.component";

export const TabRatings = () => <Stack gap={1} style={{alignItems: "center"}}>
    <RatingListComponent />
</Stack>;
import { Card, Col, Placeholder } from "react-bootstrap";
import { useGetCharactersByUrlQuery } from "../../api";
import { Rating } from "../../types"
import { RatingComponent } from "../rating/Rating.component";

type Props = {
    rating: Rating
}

export const RatingListCard = ({rating: {character, data, user}}: Props) => {
    const {data:people, isFetching} = useGetCharactersByUrlQuery(character.url);

    return people && !isFetching ? <Col>
        <Card style={{width: '100%'}}>
            <Card.Body>
                <Card.Title>
                    {user.username} noted<br/>
                    {people.name}
                </Card.Title>
                <RatingComponent characterUrl={character.url} username={user.username} currentValue={data}/>
            </Card.Body>
        </Card>
    </Col>: <PlaceholderCard/>
}

export const PlaceholderCard = () => <Col>
    <Card style={{width: '100%'}}>
        <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={9}/><br/>
                <Placeholder xs={5}/>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={3}/>
            </Placeholder>
        </Card.Body>
    </Card>
</Col>;
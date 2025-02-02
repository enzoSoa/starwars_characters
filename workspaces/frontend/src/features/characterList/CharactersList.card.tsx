import { Card, Col, Placeholder } from "react-bootstrap";
import { useGetCharactersByUrlQuery } from "../../api";
import { useContext } from "react";
import { UsernameContext } from "../../context";
import { RatingComponent } from "../rating/Rating.component";

type Props = {
    characterUrl: string
}

export const CharacterCard = ({characterUrl}: Props) => {
    const {data: character, isFetching} = useGetCharactersByUrlQuery(characterUrl);
    const {username} = useContext(UsernameContext);
    
    return character && !isFetching ?
        <Col>
            <Card style={{width: '100%'}}>
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        birth year : {character.birth_year}<br/>
                        gender : {character.gender}<br/>
                        height : {character.height}<br/>
                        mass : {character.mass}
                    </Card.Text>
                    {!!username && <RatingComponent characterUrl={character.url}/>}
                </Card.Body>
            </Card>
        </Col> :
        <PlaceholderCard/>;
};

export const PlaceholderCard = () => <Col>
    <Card style={{width: '100%'}}>
        <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6}/>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={8}/>
                <Placeholder xs={7}/>
                <Placeholder xs={9}/>
                <Placeholder xs={6}/>
            </Placeholder>
        </Card.Body>
    </Card>
</Col>;
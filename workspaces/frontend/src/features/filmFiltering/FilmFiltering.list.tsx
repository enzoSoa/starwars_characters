import { Dropdown, Placeholder } from "react-bootstrap"
import { Film } from "../../types"
import { useMemo } from "react"

type Props = {
    films: Film[]
    activeFilm?: Film
    onFilmClick: (film: Film) => void
}

export const FilmFilteringList = ({films, activeFilm, onFilmClick}: Props) => {
    const handleFilmClick = (film: Film) => () => onFilmClick(film);

    return <>
        {films.map((film, index) => 
            <Dropdown.Item key={index} active={activeFilm?.url === film.url} onClick={handleFilmClick(film)}>
                {film.title}
            </Dropdown.Item>
        )}
    </>;
}

export const PlaceholderList = () => {
    const placeholdersFilms = useMemo(() => Array.from({length: 6}, (_, index) => 
        <Dropdown.Item key={index} ><Placeholder xs={Math.floor(Math.random() * 8) + 4}/></Dropdown.Item>), []);

    return <>
        {placeholdersFilms}
    </>;
}
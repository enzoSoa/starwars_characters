import { Dropdown } from "react-bootstrap";
import { useGetFilmsQuery } from "../../api";
import style from "./FilmFiltering.module.css";
import { FilmFilteringList, PlaceholderList } from "./FilmFiltering.list";
import { Film } from "../../types";

type Props = {
    onFilterChange: (newFilmFilters: Film) => void
    activeFilm?: Film;
};

export const FilmFilteringComponent = ({onFilterChange, activeFilm}: Props) => {
    const {data, isFetching} = useGetFilmsQuery();

    return <section className={style.container}>
        <Dropdown>
            <Dropdown.Toggle>
                Filter by films
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {isFetching ? <PlaceholderList/> : <FilmFilteringList films={data?.results ?? []} onFilmClick={onFilterChange} activeFilm={activeFilm}/>}
            </Dropdown.Menu>
        </Dropdown>
    </section>
};
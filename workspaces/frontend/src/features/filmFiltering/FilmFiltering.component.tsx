import { Dropdown, Form } from "react-bootstrap";
import { useGetFilmsQuery } from "../../api";
import style from "./FilmFiltering.module.css";
import { FilmFilteringList, PlaceholderList } from "./FilmFiltering.list";
import { Film } from "../../types";
import { ChangeEvent, useContext } from "react";
import { UsernameContext } from "../../context";

type Props = {
    onFilterChange: (newFilmFilters: Film) => void
    activeFilm?: Film;
};

export const FilmFilteringComponent = ({onFilterChange, activeFilm}: Props) => {
    const {data, isFetching} = useGetFilmsQuery();
    const {username, setUsername} = useContext(UsernameContext);

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value);

    return <section className={style.container}>
        <Dropdown>
            <Dropdown.Toggle>
                {activeFilm ? `${activeFilm.title} characters` : "Filter by films"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {isFetching ? <PlaceholderList/> : <FilmFilteringList films={data?.results ?? []} onFilmClick={onFilterChange} activeFilm={activeFilm}/>}
            </Dropdown.Menu>
        </Dropdown>
        <Form.Control value={username ?? ""} placeholder={"enter a username to start rating characters"} onChange={handleUsernameChange}/>
    </section>
};
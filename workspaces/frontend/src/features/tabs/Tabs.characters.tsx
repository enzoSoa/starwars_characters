import { useState } from "react";
import { Film } from "../../types";
import { Stack } from "react-bootstrap";
import { FilmFilteringComponent } from "../filmFiltering/FilmFiltering.component";
import { CharactersListComponent } from "../characterList/CharactersList.component";

export const TabCharacters = () => {
    const [filmFilter, setFilmFilter] = useState<Film | undefined>(undefined);
    const handleFilterChange = (newFilmFilter: Film) => setFilmFilter(
      filmFilter?.episode_id === newFilmFilter.episode_id ? 
        undefined : 
        newFilmFilter
    );
  
    return <Stack gap={1} style={{alignItems: "center"}}>
      <FilmFilteringComponent onFilterChange={handleFilterChange} activeFilm={filmFilter}/>
      <CharactersListComponent peoplesUrls={filmFilter?.characters} />
    </Stack>;
};
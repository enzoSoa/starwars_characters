import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { CharactersListComponent } from './features/characterList/CharactersList.component'
import { Stack } from 'react-bootstrap'
import { Film } from './types'
import { FilmFilteringComponent } from './features/filmFiltering/FilmFiltering.component'

function App() {
  const [filmFilter, setFilmFilter] = useState<Film | undefined>(undefined);
  const handleFilterChange = (newFilmFilter: Film) => setFilmFilter(
    filmFilter?.episode_id === newFilmFilter.episode_id ? 
      undefined : 
      newFilmFilter
  );

  return (
    <Provider store={store}>
      <Stack gap={1} style={{alignItems: "center"}}>
        <FilmFilteringComponent onFilterChange={handleFilterChange} activeFilm={filmFilter}/>
        <CharactersListComponent peoplesUrls={filmFilter?.characters} />
      </Stack>
    </Provider>
  )
}

export default App

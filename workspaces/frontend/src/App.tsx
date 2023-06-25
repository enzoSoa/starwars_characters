import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { CharactersListComponent } from './features/characterList/CharactersList.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <CharactersListComponent />
    </Provider>
  )
}

export default App

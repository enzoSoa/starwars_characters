import { Provider } from 'react-redux'
import { store } from './store'
import { TabsComponent } from './features/tabs/Tabs.component'
import { UsernameProvider } from './context'

function App() {
  return (
    <Provider store={store}>
      <UsernameProvider>
        <TabsComponent />
      </UsernameProvider>
    </Provider>
  )
}

export default App

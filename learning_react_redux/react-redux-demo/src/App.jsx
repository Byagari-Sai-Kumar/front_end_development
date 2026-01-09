import './App.css'
import {Provider} from 'react-redux'
import cakeStore from './redux/cakes/cakeStore.jsx'
import CakeContainer from './components/1CakeContainer/cakeContainer.jsx'
import CakeContainerTwo from './components/1CakeContainer/cakeContainerTwo.jsx'

function App() {
  return (
    <Provider store={cakeStore}>
      <div>
        <CakeContainer/>
        <CakeContainerTwo/>
      </div>
    </Provider>
  )
}

export default App

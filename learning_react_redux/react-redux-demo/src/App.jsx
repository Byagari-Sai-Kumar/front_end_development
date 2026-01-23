import './App.css'
import {Provider} from 'react-redux'
// import cakeStore from './redux/cakes/cakeStore.jsx'
// import CakeContainer from './components/1CakeContainer/cakeContainer.jsx'
// import CakeContainerTwo from './components/1CakeContainer/cakeContainerTwo.jsx'
// import { icecreamStore } from './redux/icecream/icecreamStore.jsx'
// import IcecreamContainer from './components/2IcecreamContainer/icecreamContainer.jsx'
// import rootStore from './redux/rootReducers.jsx'
// import CakeContainerOne from './components/3CombinedContainers/cakeContainer.jsx'
// import CakeContainerTwoTwo from './components/3CombinedContainers/cakeContainerTwo.jsx'
// import IcecreamContainerOne from './components/3CombinedContainers/icecreamContainer.jsx'

import JuiceContainer from './components/4FoodmartContainer/juiceContainer/juiceContainer.jsx'
import FastFoodContainer from './components/4FoodmartContainer/fastFoodContainer/fastFoodContainer.jsx'
import DessertContainer from './components/4FoodmartContainer/dessertContainer/dessertContainer.jsx'

import foodmartStore from './redux/food_mart/foodmart_root_reducer.jsx'

function App() {
  return (
      <div>
        {/* <Provider store={cakeStore}>
          <CakeContainer/>
          <CakeContainerTwo/>
        </Provider>
        <Provider store={icecreamStore}>
          <IcecreamContainer/>
        </Provider>
        
        <Provider store={rootStore}>
          <CakeContainerOne/>
          <CakeContainerTwoTwo/>

          <IcecreamContainerOne/>
        </Provider> */}
        <Provider store={foodmartStore}>
          <JuiceContainer/>
          <FastFoodContainer/>
          <DessertContainer/>
        </Provider>
        
      </div>
  )
}

export default App

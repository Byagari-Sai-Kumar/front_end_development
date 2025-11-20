import logo from './logo.svg';
import './App.css';
//import {Greet} from './components/Greet/greet';
//import Greet from './components/Greet/greet';
import HelloWorld from './components/ClassComponent/helloWorld';
import { Greet,GoodMorning } from './components/Jsx/jsx';
import {Car,Bike} from './components/Props/Cars';
import GreetVisitors from './components/State/state';
import Counter from './components/SetState/counter';
import {GreetPeople,GreetPeopleClass} from './components/DestructuringPropsState/greet';
import {Purchase,PurchaseClass} from './components/EventHandling/eventHandlingFunction';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet/>
      <HelloWorld/> */}
      <Greet/>
      <GoodMorning/>
      <Car brand="Audi"/>
      <Car brand="BMW"/>
      <Car brand="Toyota"/>
      <Car brand="Benz">
        <button>Click here to buy</button>
      </Car>
      <Bike brand="KTM"/>
      <Bike brand='Honda'>
        <button>Click here to buy now</button>
      </Bike>
      <GreetVisitors/>
      <Counter helpValue="10"/>
      <GreetPeople name="sai kumar" city="Hyderabad"/>
      <GreetPeople name="ramesh" city="Mumbai"/>
      <GreetPeopleClass name="Rajest" city="Banglore"/>
      <Purchase/>
      <PurchaseClass/>
    </div>
  );
}

export default App;

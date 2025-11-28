import logo from './logo.svg';
import './App.css';
//import {Greet} from './components/Greet/greet';
//import Greet from './components/Greet/greet';
import HelloWorld from './components/2ClassComponent/helloWorld';
import { Greet,GoodMorning } from './components/3Jsx/jsx';
import {Car,Bike} from './components/4Props/Cars';
import GreetVisitors from './components/5State/state';
import Counter from './components/6SetState/counter';
import {GreetPeople,GreetPeopleClass} from './components/7DestructuringPropsState/greet';
import { EventHandlerFunction,EventHandler } from './components/8EventHandling/eventHandlers';
import ParentComponent from './components/9MethodsAsProps/parentComponent';
import ConditionalRendering from './components/10ConditionalRendering/conditionalRendering';
import {ParentList} from './components/11ListRendering/parentList';
import {ParentStylingComponent} from './components/12Styling/parentComponent';
import ControlledComponent from './components/13ControlledComponents/form';
import ComponentA from './components/14LifeCycleMethods/componentA';
import {Fragment} from './components/15Fragments/fragment';
import RegularPureComponentHolder from './components/16PureComponents/regularPureComponentHolder';
import RefDemoComponent from './components/18Ref/refDemo';
import ParentRefComponent from './components/18Ref/parentRefComponent';
import ForwardRefParentComponent from './components/18Ref/forwardRefParentComponent';
import PortalsDemo from './components/19Portals/portals';
import ErrorBoundaryChildComponent from './components/20ErrorBoundary/ParentErrorBoundary';
import {Hero} from './components/20ErrorBoundary/hero';
import CounterComponent from './components/21HigherOrderComponents/counter';
import HoverComponent from './components/21HigherOrderComponents/hover';
import CounterHoverContainer from './components/22RenderPropsPattern/counterHoverContainer';
import CounterTwoComponent from './components/22RenderPropsPattern/counterTwo';
import HoverTwoComponent from './components/22RenderPropsPattern/hoverTwo';

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
      <EventHandlerFunction/>
      <EventHandler/>
      <ParentComponent/>
      <ConditionalRendering/>
      <ParentList/>
      <ParentStylingComponent/>
      <ControlledComponent/>
      <ComponentA/>
      <Fragment/>
      <RegularPureComponentHolder/>
      <RefDemoComponent/>
      <ParentRefComponent/>
      <ForwardRefParentComponent/>
      {/* <PortalsDemo/> */}
      <ErrorBoundaryChildComponent>
          <Hero hero="Superman"/>
      </ErrorBoundaryChildComponent>
      <ErrorBoundaryChildComponent>
          <Hero hero="Batman"/>
      </ErrorBoundaryChildComponent>
      {/* <ErrorBoundaryChildComponent>
          <Hero hero="Joker"/>
      </ErrorBoundaryChildComponent> */}
      <CounterComponent name='sai kumar'/>
      <HoverComponent name='rahul'/>
      <CounterHoverContainer
        render={(count,incrementCount) => (
          <CounterTwoComponent count={count} incrementCount={incrementCount}/>
        )}
      />
    </div>
  );
}

export default App;

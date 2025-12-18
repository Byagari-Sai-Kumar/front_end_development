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
import {CounterTwo} from './components/22RenderPropsPattern/counterTwo';
import {HoverTwo} from './components/22RenderPropsPattern/hoverTwo';
import { UserProvider } from './components/23Context/userContext';
import {ComponentContextA} from './components/23Context/componentContextA';
import AxiosComponent from './components/24Axios/axiosComponent';
import {UseStateHook} from './components/25useStateHook/useStateHook';
import {UseEffectHook} from './components/26useEffectHook/useEffectHook';
import {UseContextHookA} from './components/27useContextHook/useContextHookA';
import {UseReducerCounter} from './components/28useReducerHook/useReducerCounter';
import {UseReducerCounterTwo} from './components/28useReducerHook/useReducerCounterTwo';
import {UseReducerCounterThree} from './components/28useReducerHook/useReducerCounterThree';
import {UseReducerFour} from './components/28useReducerHook/useReducerFour';
import {UseReducerDataFetching} from './components/28useReducerHook/useReducerDataFetching'
import {UseCallbackParentComponent} from './components/29useCallbackHook/parentComponent'
import {UseMemoHook} from './components/30useMemoHook/counter'
import {UseRefHook} from './components/31useRefHook/useRefHook'
import {UseRefHookTwo} from './components/31useRefHook/useRefHookTwo'
import {UseDocumentTitleCounter} from './components/32useDocumentTitleHook/useDocumentTitleCounterOne'
import {UseDocumentTitleCounterTwo} from './components/32useDocumentTitleHook/useDocumentTitleCounterTwo'
import {UseCounterHookOne} from './components/33useCounterHook/useCounterOne'
import {UseCounterHookTwo} from './components/33useCounterHook/useCounterTwo'
import {UseStateRender} from './components/35UseStateRender/useStateRender'
import {UseReducerRender} from './components/36UseReduerRender/useReducerRender'
import {ImmutableStateRender} from './components/37ImmutableStateRender/immutableStateRender'
import {ImmutableStateArrayRender} from './components/37ImmutableStateRender/immutableStateArrayRender'
import {ParentRender} from './components/38ParentChildRender/ParentRender'
import {ParentOneRender} from './components/39SameElementReference/ParentRender'
import {ChildOneRender} from './components/39SameElementReference/ChildRender'
import {GrandParentOne} from './components/39SameElementReference/GrandParent'
import {ParentMemoRender} from './components/40ReactMemoRender/ParentMemoRender'
import {ParentTwoMemoRender} from './components/41IncorrectReactMemo/ParentTwoMemoRender'
import {ParentThreeMemoRender} from './components/42IncorrectReactMemoTwo/ParentThreeMemoRender'

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
          <CounterTwo count={count} incrementCount={incrementCount}/>
        )}
      />
      <CounterHoverContainer
        render={(count,incrementCount) => (
          <HoverTwo count={count} incrementCount={incrementCount}/>
        )}
      />
      <UserProvider value='sai kumar'>
        <ComponentContextA/>
      </UserProvider>
      <AxiosComponent/>
      <UseStateHook/>
      <UseEffectHook/>
      <UseContextHookA/>
      <UseReducerCounter/>
      <UseReducerCounterTwo/>
      <UseReducerCounterThree/>
      <UseReducerFour/>
      <UseReducerDataFetching/>
      <UseCallbackParentComponent/>
      <UseMemoHook/>
      <UseRefHook/>
      <UseRefHookTwo/>
      <UseDocumentTitleCounter/>
      <UseDocumentTitleCounterTwo/>
      <UseCounterHookOne/>
      <UseCounterHookTwo/>
      <UseStateRender/>
      <UseReducerRender/>
      <ImmutableStateRender/>
      <ImmutableStateArrayRender/>
      <ParentRender/>
      <ParentOneRender>
        <ChildOneRender/>
      </ParentOneRender>
      <GrandParentOne/>
      <ParentMemoRender/>
      <ParentTwoMemoRender/>
      <ParentThreeMemoRender/>
    </div>
  );
}

export default App;

import './App.css'
import {Greet} from "./components/1TypingProps/greet"
import {GreetBasicProps} from "./components/2BasicProps/greet"
import {Person} from "./components/2BasicProps/person"
import {PersonList} from "./components/2BasicProps/personList"
import {Status} from "./components/3AdvanceProps/status"
import {Header} from './components/3AdvanceProps/heading'
import {Oscar} from "./components/3AdvanceProps/oscar"
import {OptionalProps} from "./components/3AdvanceProps/optionalProps"
import { Button } from './components/4EventProps/button'
import { Input } from './components/4EventProps/input'
import { ContainerStyle } from './components/5StyleProps/styleContainer'
import { PropsTips } from './components/6Tips/tips'
import {ThemeContextProvider} from './components/9UseContext/ThemeContext'
import {Box} from './components/9UseContext/Box'
import { UserContextProvider } from './components/9UseContext/UserContext'
import { User } from './components/9UseContext/User'
import { Private } from './components/12ComponentAsProp/private'
import { Home } from './components/12ComponentAsProp/home'
import { List } from './components/13GenericProps/list'
import { RandomNumber } from './components/14RestrictionProps/randomNumber'
import { Toast } from './components/15TemplateLiterals/toast'
import { CustomButton } from './components/16WrappingHTMLElements/button'
import { CustomInput } from './components/16WrappingHTMLElements/input'
import { CustomElement } from './components/18PolymorphicComponents/customElement'

function App() {
  const personDetails = {
    firstName : "Bruce",
    lastName : "Wane"
  }

  const nameList = [
    {
      firstName : "sai",
      lastName : "kumar"
    },
    {
      firstName : "ramesh",
      lastName : "rao"
    },
    {
      firstName : "suraj",
      lastName : "jain"
    }
  ]

  return (
    <>
      <Greet name="sai kumar"/>
      <GreetBasicProps name='sai kumar' messageCount={10} isLoggedIn={true}/>
      <Person name={personDetails}/>
      <PersonList people={nameList}/>
      <Status currentStatus="success"/>
      <Header>Good Morning!!</Header>
      <Oscar>
        <Header>Oscar goes to John</Header>
      </Oscar>
      <OptionalProps name="saikumar" isIndian={true}/>
      <Button handleClick={() => alert("Hello from typescript button event!!")}/>
      <Input value="sai kumar" handleChange={(event) => console.log(event)}/>
      <ContainerStyle styles={{backgroundColor:'blue', margin: '10px'}}/>
      <PropsTips name="rahul"/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Private isLoggedIn={true} component={Home}/>
      <List items={['apple','banana','mango']} onClick={(item) => console.log(item)}/>
      <List items={[1,2,3]} onClick={(item) => console.log(item)}/>
      <RandomNumber randomNumber={10} isPositive/>
      <Toast position='left-center'/>
      <CustomButton variant='primary' onClick={() => console.log('custom button clicked')}>
          Click here
      </CustomButton>
      <CustomInput type="text" value="saikumar"/>
      <CustomElement as='h1' size='sm' color='primary'>
        Heading
      </CustomElement>
      <CustomElement as='p'  size='sm' color='primary'>
        Paragraph
      </CustomElement>
      <CustomElement as='label' htmlFor="someID" size='sm' color='primary'>
        Label
      </CustomElement>
    </>
  )
}

export default App
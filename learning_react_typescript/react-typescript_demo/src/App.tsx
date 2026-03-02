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
      <GreetBasicProps name='saik kumar' messageCount={10} isLoggedIn={true}/>
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
    </>
  )
}

export default App
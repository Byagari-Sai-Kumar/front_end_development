import './App.css'
import {Greet} from "./components/1TypingProps/greet"
import {GreetBasicProps} from "./components/2BasicProps/greet"
import {Person} from "./components/2BasicProps/person"
import {PersonList} from "./components/2BasicProps/personList"

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
    </>
  )
}

export default App
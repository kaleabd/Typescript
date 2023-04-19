import './App.css'
import { Greet }from './components/Greet'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'

function App() {
  // Objects
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  //Arrays

  const nameList = [
    {
      first: 'Mia',
      last: 'Khalid',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    }
  ]

  return (
    <div >
      <Greet name="Kaleab" messageCount = {15} isLoggedIn= {false}/>
      <Person name = {personName}/>
      <PersonList names = {nameList}/>
      <Status status='success'/>
      {/* children prop type */}
      <Heading >Placeholders</Heading>
      {/* react components type */}
      <Oscar>
        <Heading>Oscar goes to Kanye West!</Heading>
      </Oscar>
      {/* optional type */}
      <Greet name="Kaleab" isLoggedIn= {true}/>
    </div>
  )
}

export default App

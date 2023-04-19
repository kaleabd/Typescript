import './App.css'
import { Greet }from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

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
    </div>
  )
}

export default App

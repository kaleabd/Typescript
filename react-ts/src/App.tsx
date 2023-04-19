import './App.css'
import { Greet }from './components/Greet'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Button } from './components/events/Buttons'
import { Input } from './components/events/Input'
import { LoggedIn } from './components/state/LoggedIn'
import { Container } from './components/styles/Container'

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
      <Button 
        handleClick={(e,id) => {
          console.log("clikced", e, id);
        }}
      />
      <Input value='' handleChange={(e) => console.log(e)}/>
      <Container styles ={{border: '3px solid red', padding: '1rem'}}/>
      <br />
      <LoggedIn />
    </div>
  )
}

export default App

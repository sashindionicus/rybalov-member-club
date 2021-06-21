import React, { useState, useEffect } from 'react';
import Members from './components/Members';
import NewMemberForm from './components/NewMemberForm';
import moment from 'moment';
import axios from 'axios';


const registrationDate = moment().format('DD.MM.YYYY');



const App = () => {
  const [members, setMembers] = useState([])
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/members')
      .then(response => {
        setMembers(response.data)
      })
  }, [])


  const addMembersHandler = event => {
    event.preventDefault()
    const memberObject = {
      id: members.length + 1,
      name: newName.trim(),
      email: newEmail.trim(),
      date: registrationDate
    }
    
    const existingEmail = members.find((member) => member.email === newEmail.trim())

    if (existingEmail !== undefined) {
      (alert(`${newEmail} is already added to Members-Club`))
    } else {
    axios
      .post('http://localhost:3001/api/members', memberObject)
      .then(response => {
        setMembers(members.concat(response.data))
        setNewName('')
        setNewEmail('')
      })
    }
  }

  const handleMemberChange = event => {
    setNewName(event.target.value)
  }

  const handleEmailChange = event => {
    setNewEmail(event.target.value)
  }


  return (
    <div>
    <h1>Welcome to the Club!</h1>
    <NewMemberForm addMembersHandler={addMembersHandler} handleMemberChange={handleMemberChange} newName={newName} handleEmailChange={handleEmailChange} newEmail={newEmail} />
    <h4>Members</h4>
    <Members members={members} />
    </div>
  )
}

export default App;

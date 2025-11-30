import React from 'react'
import './App.css'
import Users from './components/Users'
import NewUser from './components/NewUser'
import { UsersProvider } from './context/UserContext'

function App() {

  return (
    <>
      <h2>User Management App [Using Custom Use-Context Hook]</h2>
      <UsersProvider>
        <NewUser />
        <Users />
      </UsersProvider>
    </>
  )
}

export default App

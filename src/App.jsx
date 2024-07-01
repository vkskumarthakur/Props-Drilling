import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { UserProvider } from './components/UserContext'

function App() {
  const user = {name:"Vikas",address:"Delhi"}

  return (
    <>
    <UserProvider value={user}>
     <Header/>
    </UserProvider>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Header from './components/Header'

function App() {
  const user = {name:"vikas",address:"delhi"}

  return (
    <>
     <Header userDetails={user}/>
    </>
  )
}

export default App

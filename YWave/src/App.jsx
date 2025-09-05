import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AppRouter from './router/AppRouter'
import PlayerBar from './components/PlayerBar/PlayerBar'

const App = () => {
  return (

    <div>
      <Navbar/>
      <AppRouter/>
        <PlayerBar /> 
    </div>
  )
}

export default App
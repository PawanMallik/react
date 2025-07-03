import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Image from './pages/Image'
import Jokes from './pages/Jokes'
import Nav from './components/Nav'
import Home from './pages/Home'
import Music from './pages/Music'
import Zipcode from './pages/Zipcode'

const App = () => {
  
  return (

    <div>    
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/image' element={<Image/>}/>
        <Route path='/jokes' element={<Jokes/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/zipcode' element={<Zipcode/>}/>
      </Routes>
    </div>
  )
}

export default App
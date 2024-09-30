import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Slider from './Slider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services'element={<Services/>} />
      <Route path='/slider'element={<Slider/>} />
      <Route path='/contact'element={<Contact/>} />
    </Routes>
     
    </>
  )
}

export default App

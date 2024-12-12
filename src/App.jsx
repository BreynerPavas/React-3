import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reserve from './components/Reserve/Reserve'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />       
        <Route path='/reserve' element={<Reserve/>} />
        <Route path='/about' element={<About/>} />       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

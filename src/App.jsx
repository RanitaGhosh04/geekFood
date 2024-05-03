import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroPage from './components/HeroPage'
import Card from './components/Card'
import Grid from './components/Grid'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <NavBar/>
     <HeroPage/>
     <Card/>
     <Grid/>
     <Footer/>
    </>
  )
}

export default App

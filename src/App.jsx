import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      
    </div>
  )
}

export default App

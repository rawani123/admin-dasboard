import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {
  const [openSiderbarToggle, setOpenSiderbarToggle] = useState(false)
  const openSiderbarToggleHandler = () => {
    setOpenSiderbarToggle(!openSiderbarToggle)
  }

  return (
    <div className='grid-container'>
      <Header openSiderbarToggleHandler={openSiderbarToggleHandler}/>
      <Sidebar openSiderbarToggle={openSiderbarToggle} openSiderbarToggleHandler={openSiderbarToggleHandler}/>
      <Home/>
    </div>
  )
}

export default App

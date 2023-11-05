import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Text from './components/Text'
import RecentlyAdded from './components/recentlyAdded'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <RecentlyAdded/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HellsVanity from './pages/HellsVanity'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HellsVanity />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold">Steam Store Clone</h1>
      <div className="mt-4 h-12 w-12 bg-blue-500"></div>
      </div>
    </>
  )
}

export default App

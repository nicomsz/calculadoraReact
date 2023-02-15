import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Calculator } from './components/calculator'
import './input.css'

function App() {


  return (
    <div className="grid place-content-center bg-slate-800 h-screen w-screen shadow-lg">
    
      <Calculator />
      

    </div>
  )
}

export default App

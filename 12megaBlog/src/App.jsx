import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
      Mega Blog Page with Appwrie !
      </h1>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './assets/components/ParentComponent'
import PassWordGenComponent from './assets/components/PassWordGenComponent'

function App() {
  return (
    <div className='w-full h-screen duration-200'>
      {/* UseCallBACK EXAMPLE */}
      {/* <ParentComponent /> */}
      <PassWordGenComponent/>
    </div>
  )
}

export default App

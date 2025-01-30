import { useEffect, useState } from 'react'
import './App.css'
import Card from './Component/Card'
import ThemeBtn from './Component/ThemeBtn'
import { ThemProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode] = useState();
  const SwitchToDark = () => {
    setThemeMode('dark');
  }
  const SwitchToLight = () => {
    setThemeMode('light');
  }

  useEffect(()=>{
      document.querySelector('html').classList.remove('dark','light');
      document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return (
    <ThemProvider value={{ themeMode, SwitchToDark, SwitchToLight }}>
      <div className="flex flex-wrap min-h-scren items-center mt-16 ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4 bg-white p-1 rounded-lg shadow ">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemProvider>
  )
}

export default App

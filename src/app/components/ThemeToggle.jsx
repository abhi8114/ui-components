'use client'
import React, {useState} from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  console.log(theme);
  return (
    <div className={`min-h-screen p-10 transitio duration-100 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white' }`}>
      
    <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>   

    </div>
  )
}

export default ThemeToggle

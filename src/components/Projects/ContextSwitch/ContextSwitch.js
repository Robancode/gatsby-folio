import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import './index.css'

function ContextSwitch() {
  return (
    <div className="ContextSwitchApp">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default ContextSwitch;

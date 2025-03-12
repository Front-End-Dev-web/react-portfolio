import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Page from './page'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
<BrowserRouter >
<Routes>
<Route path='/' element ={<Page/>}>
<Route index element ={<Main/>}/>
</Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App

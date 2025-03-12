import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './main'
import Page from './Page'

function App() {
  
  return (
    <>
<Router >
<Routes>
<Route path='/' element ={<Page/>}/>


</Routes>
</Router>
    </>
  )
}

export default App

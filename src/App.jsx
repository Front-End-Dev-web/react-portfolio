import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './components/Main'
import Page from './Page'

function App() {
  
  return (
    <>
<Router >
<Routes>
<Route path='/' element ={<Page/>}>
<Route index element ={<Main/>}/>
</Route>
</Routes>
</Router>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './components/shared/Navigation/Navigation'
import './App.css';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/register' element={<Register/>} />
      <Route path='/login' element={} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
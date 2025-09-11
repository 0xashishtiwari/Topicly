import React, { use } from 'react'
import { BrowserRouter , Routes , Route , Navigate, Outlet} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './components/shared/Navigation/Navigation'
import './App.css';

import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import { useSelector } from 'react-redux';




const App = () => {
  return (
    <BrowserRouter>

    {/* Navbar */}
    <Navigation/> 

    <Routes>
  {/* Guest-only routes */}
  <Route element={<GuestLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/authenticate' element={<Authenticate/>}/>
  </Route>

  {/* Semi-protected routes (auth but not activated) */}
  <Route element={<SemiProtectedRoute/>}>
    <Route path='/activate' element={<Activate/>}/>
  </Route>

  {/* Fully protected routes */}
  <Route element={<ProtectedRoute/>}>
    <Route path='/rooms' element={<Rooms/>}/>
  </Route>
</Routes>

    </BrowserRouter>
  )
}


const GuestLayout = ()=>{
  const { isAuth} = useSelector((state)=>state.auth);
  
  return isAuth ?< Navigate replace  to={'/rooms'}/> : <Outlet/>
}
const SemiProtectedRoute = ()=>{
  const {user , isAuth} = useSelector((state)=>state.auth);
  return !isAuth ? <Navigate replace to={'/'}/> : isAuth && !user.activated ? <Outlet/> : < Navigate replace  to={'/rooms'}/>
}
const ProtectedRoute = ()=>{
  const {user ,isAuth} = useSelector((state)=>state.auth);
  return !isAuth ? <Navigate replace to={'/'}/> : isAuth && !user.activated ? < Navigate replace  to={'/activate'}  /> : <Outlet/>
}
export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import SignUp from './component/SignUp'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Tb from './component/Tb'
import StateSpace from './component/StateSpace'
import Counter from './component/Counter'
import Select from './component/Select'
import Api from './component/Api'
import Product from './component/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     <NavBar/>
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/tb" element={<Tb/>}/>
      <Route path="/state" element={<StateSpace/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/name" element={<Select/>}/>
      <Route path="/api" element={<Api/>}/>
      <Route path="product" element={<Product/>}/>

      
     </Routes>

    </>
  )
}

export default App

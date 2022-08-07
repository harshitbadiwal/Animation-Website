import react from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contect from './Contect'
import "./index.css"
import Footer from './Footer'

const App =()=>{
  
  return<>
  <Navbar/>
  <Routes>
  <Route  path='/*' element={<Home/>}/>
  <Route  path='/about' element={<About/>}/>
  <Route  path='/contect' element={<Contect/>}/>
  <Route  path='/service' element={<Service/>}/>
  </Routes>
  <Footer/>

  
 
  </>
}

export default App
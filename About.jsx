import react from 'react'
import images4 from "../src/images/images4.jpg"
import Card from './Card'
import Coman from './Coman'

const About =()=>{
  return<>
  <Coman
    name= "Welcome to About Page"
    img ={images4}
    visit ="/contect"
    btn="Contect Now"
    
  />
    
  </>
}

export default About
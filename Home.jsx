import react from 'react'

import images4 from "../src/images/images4.jpg"
import Coman from './Coman'

const Home =()=>{
  return<>
    <Coman 
      name = "Grow your business with "
      img ={images4}
      visit ="./service"
      btn="Get Started"
    />
  </>
}

export default Home
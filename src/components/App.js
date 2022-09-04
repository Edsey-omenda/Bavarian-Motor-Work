import React  from 'react'
import Navbar from  './Navbar'
import Home from './Home'
import Models from './Models';
import Reviews from './Review';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default  function App(){
      return(
        <Router> 
            <div>
        <Navbar />
          </div>

          <Routes>
          <Route  exact path="/" element={<Home />}></Route>
          <Route  exact path="/models" element={<Models />}></Route>
          <Route  exact path="/reviews" element={<Reviews />}></Route>
          </Routes>
          </Router>
       
      )
}
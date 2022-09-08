import React  from 'react'
import Navbar from  './Navbar'
import Home from './Home'
import Models from './Models';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ModelForm from './ModelForm';

export default  function App(){
      return(
        <Router> 
            <div>
        <Navbar />
          </div>

          <Routes>
          <Route  exact path="/" element={<Home />}></Route>
          <Route  exact path="/models" element={<Models />}></Route>
          <Route  exact path="/newmodel" element={<ModelForm />}></Route>
          </Routes>
          </Router>
       
      )
}
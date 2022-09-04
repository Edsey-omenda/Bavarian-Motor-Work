import React  from  'react'
import pic from "../Assets/bmw.jpg";


export default function Bavarian(){
 return (
 <div>
    <img src={pic} alt="bmw-icon" style={{width : 75 + 'rem'}} /> <br></br> <br></br>
 <div className='nav-link text-blue h4' to="/">
    100% BMW CERTIFIED
    <br></br>
    <br></br>
    100% SUMMER CERTIFIED
 </div>
 </div>
 
 )
}
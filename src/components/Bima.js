import React  from  'react'
import pic from "../Assets/bmw.jpg";


export default function Bavarian(){
 return (
 <div>

    <img src={pic} alt="bmw-icon" style={{width : 75 + 'rem'}} /> <br></br> <br></br>
 <div className='nav-link text-blue h4' to="/">
    <p className='card-text'>
    100% BMW CERTIFIED   &nbsp; 
    <a href ="https://www.bmwusa.com/vehicles/x-models/x1/sports-activity-vehicle/overview.html" span class="badge rounded-pill text-bg-primary">Learn more</a>
    <br></br>
    <br></br>
    100% SUMMER CERTIFIED   &nbsp; 
    <a href ="#" span  class="badge rounded-pill text-bg-info" >Pre-Owned Inventory</a>
    </p>
 </div>
 </div>
 
 )
}
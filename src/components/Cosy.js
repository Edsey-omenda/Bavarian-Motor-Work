import  React  from  'react'
import pic from "../Assets/2020-BMW-X5M-Competition-and-X6M-Competition-3.jpg";


export default  function Cosy(){


    return(
        <div className="col m-2">
            <img src={pic} alt="bmw-interior" style={{width : 28 + 'rem', height : 24 + 'rem'}}/>
            <div className='card-text'>
            <h4>Always  moving  and  evolving</h4>
            <p>A fresh  perspective of the  SUV X5 &nbsp;
            <a href ="https://www.motortrend.com/cars/bmw/x5/2020/"  class="badge rounded-pill text-bg-info" >Learn more</a>
            </p>
         </div>
        </div>
    )
}
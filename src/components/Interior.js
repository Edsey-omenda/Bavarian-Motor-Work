import  React  from  'react'
import pic from "../Assets/interiorBMW.jpg";


export default  function Interior(){


    return(
        <div className="col m-2">
            <img src={pic} alt="bmw-interior" style={{width : 25 + 'rem', height : 25 + 'rem'}}/>
            <div className='card-text'>
            <h4>Is the BMW X5 a Good SUV?</h4>
            <p>The X5, BMW's midsize luxury SUV, 
            entered its fourth generation for the 2019 model year 
            and introduces an M Sport model for 2020. &nbsp;
            <a href ="https://www.motortrend.com/cars/bmw/x5/2020/"  class="badge rounded-pill text-bg-info" >Learn more</a>
            </p>
         </div>
        </div>
       
    )
}
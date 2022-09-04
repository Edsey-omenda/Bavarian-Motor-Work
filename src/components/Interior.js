import  React  from  'react'
import pic from "../Assets/interiorBMW.jpg";


export default  function Interior(){


    return(
        <div className="col m-2">
            <img src={pic} alt="bmw-interior" style={{width : 25 + 'rem'}}/>
            <div className='card-text'>
            <h4>Is the BMW X5 a Good SUV?</h4>
         </div>
        </div>
       
    )
}
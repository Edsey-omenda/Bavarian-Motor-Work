import  React  from  'react'
import pic from "../Assets/garageBMW.jpg";


export default  function Garage(){


    return(
        <div className="col m-2">
            <img src={pic} alt="bmw-interior" style={{width : 25 + 'rem'}}/>
        </div>
    )
}
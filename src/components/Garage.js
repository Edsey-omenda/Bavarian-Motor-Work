import  React  from  'react'
import pic from "../Assets/garageBMW.jpg";


export default  function Garage(){


    return(
        <div className="col m-2">
            <img src={pic} alt="bmw-interior" style={{width : 25 + 'rem', height : 25 + 'rem'}}/>
            <div className='card-text'>
            <h4>The beating heart of  any  city!</h4>
            <p>Machine  preying upon the unknowing &nbsp;
            <a href ="https://www.bmwofarlington.com/bmw-x5-specs-arlington-tx/"  class="badge rounded-pill text-bg-info" >Learn more</a>
            </p>
         </div>
        </div>
    )
}
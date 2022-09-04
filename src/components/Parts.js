import  React  from  'react'
import pic from "../Assets/bmwparts.jpg";


export default  function Parts(){


    return(
        <div className="col m-2">
            <img src={pic} alt="bmw-spare-part" style={{width : 25 + 'rem'}}/>
        </div>
    )
}
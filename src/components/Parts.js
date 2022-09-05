import  React  from  'react'
import pic from "../Assets/2020-BMW-X6M-Competition-engine.jpg";


export default  function Parts(){


    return(
        <div className="col m-2">
            <img src={pic} alt="bmw-spare-part" style={{width : 28 + 'rem', height : 24 + 'rem'}}/>
            <div className='card-text'>
            <h4>The epitome  of  Bavarian Spirit</h4>
            <p>Appreciate  the  light of movement  by  this  machine &nbsp;
            <a href ="https://www.bmwofarlington.com/bmw-x5-specs-arlington-tx/"  class="badge rounded-pill text-bg-info" >Learn more</a>
            </p>
         </div>
        </div>
    )
}
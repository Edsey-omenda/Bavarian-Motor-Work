import React from 'react';
import Delete from './DeleteModel';


export default function ModelCard({ modelThumbnail, modelTitle, modelDescription, modelReleaseYear, modelCity}){

  
    return(
        <div className="col m-2"> 
        <div className='card' style={{width : 25 + 'rem'}} > 
            <img src={modelThumbnail} className="card-img-top" alt={modelTitle}
            />
            Model: &nbsp;{modelTitle}<br></br>
            ReleaseYear: &nbsp;{modelReleaseYear}<br></br>
            Description: &nbsp;{modelDescription}<br></br>
            City:   &nbsp;{modelCity}
            
            <Delete />
        </div>
      
          
        </div>
         
    )
}
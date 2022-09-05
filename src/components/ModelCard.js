import React from 'react';

export default function ModelCard({modelThumbnail, modelTitle, id, modelDescription, modelReleaseYear}){
    return(
        <div className="col m-2">
        <div className='card' style={{width : 25 + 'rem'}} > 
            <img src={modelThumbnail} className="card-img-top" alt={modelTitle}
            />
            Model: &nbsp;{modelTitle}<br></br>
            ReleaseYear: &nbsp;{modelReleaseYear}<br></br>
            Description: &nbsp;{modelDescription}
        </div>
        </div>
         
    )
}
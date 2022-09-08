import React from 'react';
// import  EditModel from './EditModel'

export default function ModelCard({modelThumbnail, modelTitle, modelDescription, modelReleaseYear, modelCity, models, setModels}){
     
     
    function handleDeleteClick(id){
        fetch(`http://localhost:4000/models/${id}`,{
          method:"DELETE",
        })
        .then(res => res.json())
        .then(() => {
          const deleteModel = models.filter((models) => models.id !== id)
          setModels(deleteModel)
        })
      
    }

    return(
        <div className="col m-2">
        <div className='card' style={{width : 25 + 'rem'}} > 
            <img src={modelThumbnail} className="card-img-top" alt={modelTitle}
            />
            Model: &nbsp;{modelTitle}<br></br>
            ReleaseYear: &nbsp;{modelReleaseYear}<br></br>
            Description: &nbsp;{modelDescription}<br></br>
            City:   &nbsp;{modelCity}

            <button className="remove" onClick={(e) =>handleDeleteClick(models.id)}> <span role="img" aria-label="delete">
              🗑
            </span>Delete</button>
        </div>
        </div>
         
    )
}
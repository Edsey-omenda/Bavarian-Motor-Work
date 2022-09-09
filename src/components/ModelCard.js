import React, {useState} from 'react';

export default function ModelCard({modelThumbnail, modelTitle, modelDescription, modelReleaseYear, modelCity}){

 const[models, setModels] = useState([])
     
    function handleDeleteClick(id){
      if (window.confirm("Do you want to delete this post?"))

        fetch(`http://localhost:9292/models/${id}`,{
          method:"DELETE",
        })
        .then(res => res.json())
        .then(() => {
          const deleteModel = models.filter(
            (model) => model.id !== id
            )
            setModels(...models, deleteModel)
        })
      
    }
// console.log(models)
    return(
        <div className="col m-2">
        <div className='card' style={{width : 25 + 'rem'}} > 
            <img src={modelThumbnail} className="card-img-top" alt={modelTitle}
            />
            Model: &nbsp;{modelTitle}<br></br>
            ReleaseYear: &nbsp;{modelReleaseYear}<br></br>
            Description: &nbsp;{modelDescription}<br></br>
            City:   &nbsp;{modelCity}
            <button className="remove" onClick={()=>handleDeleteClick(models.id)}> <span role="img" aria-label="delete">
              🗑
            </span>Delete</button>
            
        </div>
        </div>
         
    )
}
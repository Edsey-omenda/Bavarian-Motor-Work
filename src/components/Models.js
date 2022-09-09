import React, { useEffect, useState } from 'react';
import ModelCard from './ModelCard';



export default function Models(){
    const[models, setModels] = useState([])

    useEffect(() =>{
        fetch("http://localhost:9292/models")
        .then(response => response.json())
        .then((models) =>{
        setModels(models)
        // console.log(models)
    })
    },[])

    let myModels = models.map((model) => (<ModelCard 
        modelTitle={model.title} 
        modelThumbnail={model.thumbnail} 
        modelDescription={model.short_description} 
        modelReleaseYear={model.release_date} 
        modelCity={model.city}
        id={model.id}
        key={model.id}
        />
        ))

      

    return(
        <div className="text-bg-info p-3">
        <div className='container'>My Models
          <div className='row'>
            {myModels}
          </div>
          {/* <button value ={models.id}  style={{"marginLeft":'30px'}} onClick={handleDeleteModel}  >Delete Model</button> */}
        </div>
        </div>
    )
}
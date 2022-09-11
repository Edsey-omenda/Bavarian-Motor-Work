import React, { useEffect, useState } from 'react';
import ModelCard from './ModelCard';



export default function Models(){
    const[models, setModels] = useState([])

    useEffect(() =>{
        fetch("https://bavarian-api.herokuapp.com/models")
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
        setModels={setModels}
        key={model.id}
        />
        ))

      

    return(
        <div className="text-bg-info p-3">
        <div className='container'>My Models
          <div className='row'>
            {/* <Delete /> */}
            {myModels}
          </div>
        </div>
        </div>
    )
}
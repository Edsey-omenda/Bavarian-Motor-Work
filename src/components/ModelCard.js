import React, {useState} from 'react';
import ModelItem from './Upmodel';
import  EditModel from './EditModel'

export default function ModelCard({modelThumbnail, modelTitle, modelDescription, modelReleaseYear, modelCity, onUpdateModel, onDeleteModel}){
     
    const [models, setModels] = useState([]);

    function handleDeleteModel(deletedModel) {
        console.log("In Models:", deletedModel);
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
            <ModelItem 
            onDeleteModel={handleDeleteModel}
            onUpdateModel={onUpdateModel}
            />
            <EditModel />
        </div>
        </div>
         
    )
}
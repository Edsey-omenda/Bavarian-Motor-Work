import React, {useState} from 'react';

export  default  function Delete(){

    const[models, setModels] = useState([])

 
    function handleDeleteModel(e){
     let id = e.target.value
     fetch(`https://bavarian-api.herokuapp.com/models/${id}`,{
       method:"DELETE"
     })
     .then((res)=>res.json())
     .then(()=>setModels([...models]))
   }
     

    return(

        <div>
            <button className="remove" value={models.id} onClick={handleDeleteModel}> <span role="img" aria-label="delete">
              🗑
            </span>Delete</button>
        </div>
    )
}
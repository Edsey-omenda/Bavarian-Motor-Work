
import React, {useState} from 'react';

function ModelItem({ models, setModels}) {


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

  return (
    <div>
      <button className="remove" onDeleteModel={(e) =>handleDeleteClick(model.id)}> <span role="img" aria-label="delete">
              🗑
            </span>Delete</button>
    </div>
  );
}

export default ModelItem;
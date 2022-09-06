
import React from "react";

function ModelItem({ id, onDeleteModel }) {


  function handleDeleteClick(){
      fetch(`http://localhost:4000/models/${id}`,{
        method:"DELETE",
      })
      .then(res => res.json())
      .then(()=> console.log("deleted!"))
    onDeleteModel(id)
  }

  return (
    <div>
      <button className="remove" onClick={handleDeleteClick}> <span role="img" aria-label="delete">
              🗑
            </span>Delete</button>
    </div>
  );
}

export default ModelItem;
import React, { useEffect, useState } from 'react';


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

    function handleDelete(id) {
      fetch(`http://localhost:9292/models/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          const deleteModel = models.filter((model) => model.id !== id);
          setModels(deleteModel);
        });
    }

    return(
      <div className="col m-2"> 
      <div className='card ' style={{width :25 + 'rem'}}>
        <div className="text-bg-info p-3">
          {/* <div className='card' style={{width : 25 + 'rem'}}> */}
       <h1> My Models </h1>  {
                models.map((model) => ( 
                    <ol key = { model.id } >
                        &nbsp;{model.title} 
                        <img src={model.thumbnail} className="card-img-top" alt={model.title}/>
                        Description:&nbsp;{model.short_description} <br></br>
                        ReleaseYear:&nbsp;{model.release_date} <br></br>
                        City:&nbsp;{model.city} <br></br>

                        <button className="App-button" style={{backgroundColor: "red"}}onClick={(e) => (
                        handleDelete(model.id)
                      )} ><span role="img" aria-label="delete">
                      🗑
                    </span>Delete</button >
                        </ol>
                        
                    ))
                   
                }
        </div>
        </div>
        </div>
    )
}
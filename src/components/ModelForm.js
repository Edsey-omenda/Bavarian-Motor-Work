import React, {useState} from "react";

export default function NewModelForm({title, short_description, thumbnail, release_date, city}) {
  const[models, setModels] =useState([])
  const[newTitle, setNewTitle] = useState("")
  const[newThumbnail, setNewThumbnail] = useState("")
  const[newDescription, setNewDescription] = useState("")
  const[newReleaseYear, setNewReleaseYear] = useState("")
  const[newCity, setNewCity] = useState("")

  function handleNewTitle(event){
    setNewTitle(event.target.value)
  }

  function handleNewThumbnail(event){
    setNewThumbnail(event.target.value)
  }

  function handleNewDescription(event){
    setNewDescription(event.target.value)
  }

  function handleNewReleaseYear(event){
    setNewReleaseYear(event.target.value)
  }

  function handleNewCity(event){
    setNewCity(event.target.value)
  }

  function handleSubmitNewModel(event){
    event.preventDefault();
    const newModel = {
      title: newTitle,
      thumbnail: newThumbnail,
      short_description: newDescription,
      release_date: newReleaseYear,
      city: newCity
    } 

    fetch("https://bavarian-api.herokuapp.com/models",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newModel),
   })
   .then((r) => r.json())
    .then((newModel) => setModels([...models,newModel]));
  }
 
  
  return (
    <form className="new-poem-form" onSubmit={handleSubmitNewModel}>
      <input placeholder="Title"  title="title" value={title} onChange={handleNewTitle}/>
      <input placeholder="Thumbnail"  title="title" value={thumbnail} onChange={handleNewThumbnail}/>
      <input placeholder="Description"  title="title" value={short_description} onChange={handleNewDescription}/>
      <input placeholder="Release_date"  title="title" value={release_date} onChange={handleNewReleaseYear}/>
      <input placeholder="City"  value={city} onChange={handleNewCity}/>
      <input type="submit" value="Add Model" />
    </form>
  );
}




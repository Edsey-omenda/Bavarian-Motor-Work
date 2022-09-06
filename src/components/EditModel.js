import React, { useState } from "react";

function EditModel({ id, title, short_description, city, onUpdateModel }) {
  const [modelTitle, setModelTitle] = useState(title);
  const [modelDescription, setModelDescription] = useState(short_description);
  const [modelCity, setModelCity] = useState(city);



  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/models/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: modelTitle,
        short_description:modelDescription,
        city:modelCity
      }),
    })
      .then((r) => r.json())
      .then((updatedModel) => onUpdateModel(updatedModel));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        placeholder="title"
        autoComplete="off"
        value={modelTitle}
        onChange={(e) => setModelTitle(e.target.value)}
      />
       <input
        type="text"
        name="body"
        placeholder="short_description"
        autoComplete="off"
        value={modelDescription}
        onChange={(e) => setModelDescription(e.target.value)}
      />
       <input
        type="text"
        name="body"
        placeholder="city"
        autoComplete="off"
        value={modelCity}
        onChange={(e) => setModelCity(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditModel;
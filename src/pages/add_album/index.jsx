import React, { useState } from 'react'

import { API_URLS } from '../../utils';

import './style.scss'

const NewAlbum = ({ albums, setAlbums }) => {

  const [newAlbum , setNewAlbum] = useState({});

  const handleAddAlbum = (e) => {
    e.preventDefault();
    fetch(API_URLS.albums, {
      method: "POST",
      body: JSON.stringify(newAlbum),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        albums.unshift(data);
        setAlbums(albums);
        setNewAlbum({});
      })
      .catch((error) => console.error(error));
  };


  return (
    <div className='newAlbum'>
      <h2>Add Album</h2>
      <form onSubmit={handleAddAlbum}>
        <input
          type="text"
          placeholder="User ID"
          value={newAlbum && newAlbum.userId || ""}
          onChange={(e) => setNewAlbum({ ...newAlbum, userId: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={newAlbum && newAlbum.title || ""}
          onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewAlbum

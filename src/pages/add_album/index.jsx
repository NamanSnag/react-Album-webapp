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
      <div>
      <h2>➕ Add Album</h2>
      <form onSubmit={handleAddAlbum}>
        <input
          type="text"
          className='input'
          placeholder="User ID"
          value={(newAlbum.userId) || ""}
          onChange={(e) => setNewAlbum({ ...newAlbum, userId: e.target.value })}
        />
        <br/>
        <input
          type="text"
          className='input'
          placeholder="Title"
          value={ (newAlbum.title) || ""}
          onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
        />
        <br/>
        <button className='btn' type="submit">➕ Add</button>
      </form>
      </div>
    </div>
  )
}

export default NewAlbum

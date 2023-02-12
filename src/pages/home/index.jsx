import React, { useState } from "react";

import "./style.scss";

const Home = ({ albums, setAlbums }) => {
  const [updateAlbum, setUpdateAlbum] = useState({});
  const [deleteAlbumId, setDeleteAlbumId] = useState("");

  const handleUpdateAlbum = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/albums/${updateAlbum.id}`, {
      method: "PUT",
      body: JSON.stringify(updateAlbum),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbums(
          albums.map((album) =>
            album.id === data.id ? { ...album, ...data } : album
          )
        );
        setUpdateAlbum({});
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteAlbum = (e,id) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setAlbums(albums.filter((album) => album.id !== id));
        setDeleteAlbumId("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="home">
      <section className="leftSection">
        <div className="updateAlbum">
          <div  className="left-title">
            <img src='https://cdn-icons-png.flaticon.com/128/9497/9497023.png' alt='update' />
            <h3>Update Album</h3>
          </div>
          <form onSubmit={handleUpdateAlbum}>
            <input
              type="text"
              placeholder="ID"
              value={updateAlbum.id || ""}
              className="input"
              onChange={(e) =>
                setUpdateAlbum({ ...updateAlbum, id: e.target.value })
              }
            />
            <br/>
            <input
              type="text"
              placeholder="User ID"
              className="input"
              value={updateAlbum.userId || ""}
              onChange={(e) =>
                setUpdateAlbum({ ...updateAlbum, userId: e.target.value })
              }
            />
            <br/>
            <input
              type="text"
              placeholder="Title"
              className="input"
              value={updateAlbum.title || ""}
              onChange={(e) =>
                setUpdateAlbum({ ...updateAlbum, title: e.target.value })
              }
            />
            <br/>
            <button className="btn" type="submit">Update</button>
          </form>
        </div>

        <div className="deleteAlbum">
          <div className="left-title">
              <img src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' alt="delete" />
              <h3>Delete Album</h3>
          </div>
          <form>
            <input
              type="text"
              placeholder="ID"
              className="input"
              value={deleteAlbumId || ""}
              onChange={(e) => setDeleteAlbumId(e.target.value)}
            />
            <br/>
            <button className="btn" onClick={(e) => handleDeleteAlbum(e,deleteAlbumId)}>
              Delete
            </button>
          </form>
        </div>
      </section>

      <section className="albums">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => (
              <tr key={album.id}>
                <td>{album.id}</td>
                <td>{album.userId}</td>
                <td className="title">{album.title}</td>
                <td>
                  <button
                    className="editBtn"
                    onClick={() => setUpdateAlbum(album)}
                    disabled={updateAlbum.id}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => setDeleteAlbumId(album.id)}
                    disabled={deleteAlbumId}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;

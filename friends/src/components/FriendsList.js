import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addFriend = (e) => {
    e.preventDefault();
    console.log(newFriend);
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={addFriend}>
        <h1>Add User</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newFriend.name}
          onChange={handleFormChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={newFriend.age}
          onChange={handleFormChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newFriend.email}
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <h1>Friends</h1>
      {friends.length !== 0 ? (
        <div>
          {friends.map((f) => (
            <div key={f.id}>
              <h3>Name: {f.name}</h3>
              <p>Email: {f.email}</p>
              <p>Age: {f.age}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FriendsList;
import React from "react";

const User = ({ users }) => {
  return (
    <div>
      <center>
        <h1>Users List</h1>
      </center>
      {users.map((user) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">ID: {user.id}</h5>
            <h4 class="card-subtitle mb-2 text-muted">Name: {user.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;

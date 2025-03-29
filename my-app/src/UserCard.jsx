import React from 'react';

// Using React.memo to prevent unnecessary re-renders of individual user cards
const UserCard = React.memo(({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
});

export default UserCard;

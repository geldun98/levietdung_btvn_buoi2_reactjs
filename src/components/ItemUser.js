import React from 'react';

const ItemUser = ({ value }) => {
  return (
    <div className="ItemUser">
      <div className="ItemUser-Name">{value.fullname}</div>
      <div className="ItemUser-Email">{value.email}</div>
      <div className="ItemUser-Password">{value.password}</div>
    </div>
  );
};

export default ItemUser;

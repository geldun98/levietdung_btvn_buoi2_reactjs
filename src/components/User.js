import React from 'react';
import ItemUser from './ItemUser';

export const User = ({ data }) => {
  return (
    <div className="User">
      {data.map((item, index) => (
        <ItemUser key={index} value={item}></ItemUser>
      ))}
    </div>
  );
};

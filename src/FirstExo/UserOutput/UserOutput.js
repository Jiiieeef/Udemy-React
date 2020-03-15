import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>name: {props.name}</p>
      <p>para 2</p>
    </div>
  );
};

export default userOutput;
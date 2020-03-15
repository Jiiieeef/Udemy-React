import React from 'react';

const userInput = (props) => {
  const style = {
    borderRadius: '3px'
  };
  const onNameChange = (event) => props.onNameChange(event.target.value);

  return (
    <div style={style}>
      <input type="text" onChange={onNameChange} value={props.name} />
    </div>
  );
};

export default userInput;
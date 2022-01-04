import React, { forwardRef } from 'react';

function FormGroup(props, ref) {
  function handleFocus(e) {
    e.target.parentElement.classList.remove('invalid');
  }
  return (
    <div className="FormGroup">
      <label htmlFor="fullname" className="form-label">
        {props.label}
      </label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} ref={ref} onFocus={handleFocus}></input>
      {<span className="form-message">{props.message}</span>}
    </div>
  );
}

export default forwardRef(FormGroup);

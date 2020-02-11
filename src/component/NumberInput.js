import React from 'react';
import './NumberInput.css';

export function NumberInput({label, value, description, onChange}) {
  return (
    <div className="form-row">
        <label >{label}</label>
        <input data-testid="numberInput" type="number" value={value} min='0' onChange={onChange}/>
        <label>{description}</label>
    </div>
  );
}

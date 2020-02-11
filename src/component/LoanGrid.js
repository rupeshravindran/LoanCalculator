import React from 'react';
import {NumberInput} from './NumberInput';
import {Grid} from './Grid';
import {columns} from '../config'
import './LoanGrid.css';

export function LoanGrid({id, title, data, value, onChange}) {
  return(
    <div class="loan-grid">
        <NumberInput label='Interest rate' value={value} description='(in %)' onChange={onChange}/>
        <Grid id={id} data={data} columns={columns}/>
        <div className="loan-grid-title">{title}</div>   
    </div>
  );
}
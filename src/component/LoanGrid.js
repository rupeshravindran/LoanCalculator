import React from 'react';
import {NumberInput} from './NumberInput';
import {Grid} from './Grid';
import {columns} from '../config'
import './LoanGrid.css';

export function LoanGrid({title, data, value, onChange}) {
  return(
    <div class="loan-grid">
        <NumberInput label='Interest rate' value={value} description='(in %)' onChange={onChange}/>
        <Grid data={data} columns={columns}/>
        <div class="loan-grid-title">{title}</div>   
    </div>
  );
}
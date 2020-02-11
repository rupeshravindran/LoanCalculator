import React from 'react';
import { render } from '@testing-library/react';
import {columns} from '../config'
import {Grid} from './Grid';

test('renders loan calculator', () => {
  const data = [{date:'12/02/2020', principal: 10000, interest: 300, total: 10000}];
  const { getByText } = render(<Grid id={'#11'} data={data} columns={columns}/>);
  const date = getByText('12/02/2020');
  //const principal = getByText('£10,000');
  //const interest = getByText('300');
  //const total = getByText('£10,000');

  expect(date).toBeInTheDocument();
//   expect(principal).toBeInTheDocument();
  
//   expect(interest).toBeInTheDocument();
//   expect(total).toBeInTheDocument();
});

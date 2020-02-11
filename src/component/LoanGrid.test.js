import React from 'react';
import { render } from '@testing-library/react';
import { columns } from '../config'
import { LoanGrid } from './LoanGrid';

test('renders loan grid', () => {
    const data = [{ date: '12/02/2020', principal: 10000, interest: 300, total: 10300 }];
    const { getByText } = render(<LoanGrid
        id={'RCF'}
        data={data}
        value={3} 
        title='Revolving Credit Facility'
        onChange={() => {}} />);

    const title = getByText(/Revolving Credit Facility/i);
    const interestInputLabel =  getByText(/Interest rate/i);

    const date = getByText('12/02/2020');
    const principal = getByText('£10,300.00');
    const interest = getByText('£300.00');
    const total = getByText('£10,300.00');

    const dateHeader = getByText(/date/i);
    const principalHeader = getByText(/principal/i);
    const interestHeader = getByText('Interest');
    const totalHeader = getByText(/total/i);

    expect(title).toBeInTheDocument();

    expect(interestInputLabel).toBeInTheDocument();

    expect(dateHeader).toBeInTheDocument();
    expect(principalHeader).toBeInTheDocument();
    expect(interestHeader).toBeInTheDocument();
    expect(totalHeader).toBeInTheDocument();

    expect(date).toBeInTheDocument();
    expect(principal).toBeInTheDocument();
    expect(interest).toBeInTheDocument();
    expect(total).toBeInTheDocument();
});

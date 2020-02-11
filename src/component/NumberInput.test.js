import React from 'react';
import { render } from '@testing-library/react';
import { NumberInput } from './NumberInput';

test('renders loan calculator', () => {
    const { getByText, getByTestId } = render(
        <NumberInput label='Amount requested' value={3} description='(in £)' onChange ={()=>{}} />);
    const amountRequested = getByText(/Amount requested/i);
    const amountInput = getByTestId('numberInput');
    
    expect(amountRequested).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
});

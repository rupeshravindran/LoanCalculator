import React from 'react';
import { render } from '@testing-library/react';
import {LoanCalculator} from './LoanCalculator';

test('renders loan calculator', () => {
  const { getByText } = render(<LoanCalculator />);
  const amountRequested = getByText(/Amount requested/i);
  const duration = getByText(/Duration/i);
  const RCF = getByText(/Revolving Credit/i);
  const BL = getByText(/Business Loan/i);
  expect(amountRequested).toBeInTheDocument();
  expect(duration).toBeInTheDocument();
  
  expect(RCF).toBeInTheDocument();
  expect(BL).toBeInTheDocument();
});

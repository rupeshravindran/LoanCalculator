import React, { useMemo, useState, useCallback } from 'react';
import { NumberInput, LoanGrid } from './component';
import { getRepaymentSchedules, BL } from './utils';
import './LoanCalculator.css';

export function LoanCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [duration, setDuration] = useState(4);
  const [businessLoanInterest, setBusinessLoanInterest] = useState(3);
  const [revolvingCreditInterest, setRevolvingCreditInterest] = useState(3);

  const onPrincipalChange = useCallback((event) => {
    console.log('from principal ' + event.target.value)
    setPrincipal(event.target.value);
  }, [setPrincipal]);

  const onDurationChange = useCallback((event) => {
    setDuration(event.target.value);
  }, [setDuration]);

  const onBusinessLoanInterestChange = useCallback((event) => {
    setBusinessLoanInterest(event.target.value);
  }, [setBusinessLoanInterest]);

  const onRevolvingCreditInterestChange = useCallback((event) => {
    setRevolvingCreditInterest(event.target.value);
  }, [setRevolvingCreditInterest]);
  const revolvingCreditRepayments = useMemo(() => {
    return getRepaymentSchedules(principal, duration, revolvingCreditInterest);
  }, [principal, duration, revolvingCreditInterest])

  const businessLoanRepayments = useMemo(() => {
    return getRepaymentSchedules(principal, duration, businessLoanInterest, BL);
  }, [principal, duration, businessLoanInterest])

  return (
    <div className="loan-container">
      <NumberInput label='Amount requested' value={principal} description='(in £)' onChange={onPrincipalChange} />
      <NumberInput label='Duration' value={duration} description='(in months)' onChange={onDurationChange} />

      <div className="loan-grid-container">
        <LoanGrid data={revolvingCreditRepayments}
          value={revolvingCreditInterest} title='Revolving Credit Facility'
          onChange={onRevolvingCreditInterestChange} />

        <LoanGrid data={businessLoanRepayments}
          value={businessLoanInterest} title='Business Loan' 
          onChange={onBusinessLoanInterestChange}/>
      </div>
    </div>
  );
}
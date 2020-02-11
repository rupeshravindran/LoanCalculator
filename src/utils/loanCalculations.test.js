import React from 'react';
import { render } from '@testing-library/react';
import { BL, getRepaymentSchedules } from './loanCalculations';

test('Repayment schedules for revolving credit facility', () => {
    const repayments = getRepaymentSchedules(10000, 4, 3)
    expect(repayments).toMatchSnapshot([
        { date: "30/3/2020", principal: 2500, interest: 300, total: 2800 },
        { date: "30/4/2020", principal: 2500, interest: 225, total: 2725 },
        { date: "30/5/2020", principal: 2500, interest: 150, total: 2650 },
        { date: "30/6/2020", principal: 2500, interest: 75, total: 2575 },
        { date: "Total", principal: 10000, interest: 750, total: 10750 }])
});

test('Repayment schedules for revolving credit facility', () => {
    const repayments = getRepaymentSchedules(10000, 4, 3, BL)
    expect(repayments).toMatchSnapshot([
        { date: "30/3/2020", principal: 2500, interest: 1300, total: 3800 },
        { date: "30/4/2020", principal: 2500, interest: 225, total: 2725 },
        { date: "30/5/2020", principal: 2500, interest: 150, total: 2650 },
        { date: "30/6/2020", principal: 2500, interest: 75, total: 2575 },
        { date: "Total", principal: 10000, interest: 1750, total: 11750 }])
});



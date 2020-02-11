export const RCF = 'revolving credit facility';
export const BL = 'Business Loan product';

export function getRepaymentSchedules(principal, duration, interest, loanType = RCF){
    const repayments = []; 
    const monthlyRepayment = Math.floor(principal / duration); 
    const decimalAdjustment = principal - (monthlyRepayment * duration);
    
    let balancePayment = principal;
    let totalInterestPaid = 0; 
    
    for(let i  = 0; i < duration; i++) {
        let toPay = i === 0 ? monthlyRepayment + decimalAdjustment : monthlyRepayment;
        let interestToPay =  balancePayment * interest / 100; 

        if(loanType === BL && i === 0){
            interestToPay += principal * .10;
        }
        repayments.push({
            date: getRepaymentDate(i + 1),
            principal: toPay,
            interest: interestToPay,
            total: toPay + interestToPay
        });

        balancePayment -= toPay;
        totalInterestPaid += interestToPay
    }

    const total = Number(principal) + Number(totalInterestPaid)

    repayments.push({
        date : 'Total',
        principal: principal,
        interest: totalInterestPaid,
        total: total
    })
    return repayments
}

function getRepaymentDate(delta) {
    const currentDate = new Date(); 
    const [year, month] = [currentDate.getFullYear(), currentDate.getMonth()];
    const day = ((month + delta) % 11) === 1 ? 28 : 30;
    const paymentDate = new Date(year, month + delta, day);
    return `${paymentDate.getDate()}/${paymentDate.getMonth() + 1}/${paymentDate.getFullYear()}`;
 }
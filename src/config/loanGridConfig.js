function amountFormatter(value){
    let result = Number.parseFloat(value).toFixed(2);
    return `£${result.replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}

 export const columns = [
    {label: 'Repayment date', dataField: 'date'},
    {label: 'Principal', dataField: 'principal', formatter: amountFormatter}, 
    {label: 'Interest', dataField: 'interest', formatter: amountFormatter}, 
    {label:'Total repayment', dataField: 'total', formatter: amountFormatter}
];


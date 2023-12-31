//https://onladder.co.uk/blog/how-to-calculate-mortgage-repayments/
//https://codepen.io/andarch/pen/qBxpeY

//

// REUSABLE FUNCTION
function calculate(term, apr, price){
    apr = apr / 100 // convert to fraction from percent 0.033
    apr = apr / 12; // convert year into months 

    term = term * 12; // converting years to months 

    const one_r_n = Math.pow((1 + apr), term)
    const top = apr * one_r_n
    const bottom = one_r_n - 1
    const division_result = top / bottom 
    var payment = price * division_result; 
    return payment; //PAYMENT
}

//TESTING    
let term = 25; // 30 years
let apr = 3.3; //Annnual Percentage rate
const price = 350000; // price of house


const payment = calculate(term, apr, price)
console.log(payment); // expected 1714.8654830497117


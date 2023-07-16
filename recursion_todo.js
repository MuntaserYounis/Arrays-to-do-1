//recursive sigma
function rSigma(num) {
    if (num <= 0) {
    return 0;
    }

    
    num = Math.floor(num);

    return num + rSigma(num - 1);
}
//recursive factorial
function rFact(num) {
    if (num <= 0) {
    return 1;
    }

    
    num = Math.floor(num);

    return num * rFact(num - 1);
}

console.log(rSigma(5)); 
console.log(rSigma(2.5)); 
console.log(rSigma(-1));

console.log(rFact(3)); 
console.log(rFact(6.5)); 

// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true

function rBinarySearch(arr, value, start = 0, end = arr.length - 1) {
    if (start > end) {
        return false;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
        return true; 
    } else if (arr[mid] > value) {
        return rBinarySearch(arr, value, start, mid - 1);
    } else {
        return rBinarySearch(arr, value, mid + 1, end); 
    }
}

//Coding dojo examples
console.log(rBinarySearch([1, 3, 5, 6], 4));
console.log(rBinarySearch([4, 5, 6, 8, 12], 5));


// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor 
// (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. 
// You should  be able to compute rGCF(123456,987654).

function rGCF(num1, num2) {
    if (num2 === 0) {
        return num1; // MY base case
    }

    return rGCF(num2, num1 % num2);
}




// Coding Dojo examples

console.log(rGCF(123456, 987654));



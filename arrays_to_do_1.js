// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function lets_insert(array,value){
    const arr2 = [value];
    for (let i =0;i<array.length;i++){
        
        arr2.push(array[i]);
        
    }
    return arr2;
}
var array = [1,2,3,4];
var value = 6;
var x = lets_insert(array,value);
console.log(x);

// Pop Front
// Given an array, remove and return the value at the beginning of the array.
//  Prove the value is removed from the array by printing it. You may use .pop(), 
//  you are able do this without it though!

function first(array) {
    if (array.length === 0) {
        return undefined;
    }
    
    const firstValue = array[0]; 
    
    for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1]; 
    }
    
    array.length = array.length - 1; 
    
    return firstValue;
}


const Array1 = [1, 2, 3, 4, 5];

const removedValue = first(Array1);
console.log(removedValue);
console.log(Array1); 

// Insert At
// Given an array, index, and additional value, insert the value into array at given index.
//  You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
//  You may use .push(), you are able do this without it though!

function insertAt(array, index, value) {
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
    if (i === index) {
        newArray.push(value);
    }

    newArray.push(array[i]); 
    }
    
    return newArray;
}


const originalArray = [1, 2, 3, 4, 5];
const insertIndex = 2;
const valueToInsert = 10;  
const newArray = insertAt(originalArray, insertIndex, valueToInsert);
console.log(newArray);

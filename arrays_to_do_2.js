// // Reverse
// // Given a numerical array, reverse the order of values, in-place.
// //  The reversed array should have the same length, with existing elements moved 
// //  to other indices so that order of elements is reversed.
// //   Working 'in-place' means that you cannot use a second 
// // array – move values within the array that you are given.
// //  As always, do not use built-in array functions such as splice().


// function my_reverse(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     const temp = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = temp;
//     }
    
//     return array;
// }


// const my_array = [1, 2, 3, 4, 5];

// my_reverse(my_array);
// console.log(my_array);

// function rotation(arr, shiftBy) {
//     if (arr.length === 0) {
//     return arr;
//     }
    
//     const shift = shiftBy % arr.length;
    
//     if (shift === 0) {
//     return arr;
//     }
    
//     const reverse = shift < 0;
//     const absShift = Math.abs(shift);
    
//     reversit(arr, 0, arr.length - 1);
    
//     reversit(arr, 0, absShift - 1);
    
//     reversit(arr, absShift, arr.length - 1);
    
//     if (reverse) {
//     reversit(arr, 0, arr.length - 1);
//     }
    
//     return arr;
// }

// function reversit(arr, start, end) {
//     while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//     }
// }


// const my_array = [1, 2, 3, 4, 5];

// rotation(my_array, 1);
// console.log(my_array); 

// rotation(my_array, -2);
// console.log(my_array);

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside 
// of a specific known range. Given arr and values min and max, 
// retain only the array values between min and max. Work in-place: 
// return the array you are given, with values in original order. No built-in array functions.

// function filtering(arr, min, max) {
//     let writeIndex = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
    
//     if (currentValue >= min && currentValue <= max) {
//         if (i !== writeIndex) {
//         arr[writeIndex] = currentValue;
//         }
//         writeIndex++;
//     }
//     }
    
//     arr.length = writeIndex; 
    
//     return arr;
// }

// const myArray = [5, 10, 15, 20, 25];

// filtering(myArray, 10, 20);
// console.log(myArray);

// // Concat
// // Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
// // Return a new array containing the first array's elements, followed by the second array's elements.
// //  Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// function new_concat(arr1, arr2) {
//     const newArray = [...arr1, ...arr2];
//     return newArray;
// }


// const array1 = ['a', 'b'];
// const array2 = [1, 2];

// const array3 = new_concat(array1, array2);
// console.log(array3);

// // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// // const result = words.filter(word => word.length > 6);

// let arr = [2,6,1,4,6,2,7,4,9];
// const arr2 = arr.filter (num => num >2);
// console.log(arr2)

// for (const ele of arr) {
//     console.log (ele);
// }

// const arr3 = [1,2,3,4,5,1,2,3,4,5,6];

// const arr4 = arr3.filter(num => num >4);
// console.log(arr4);

// for (const ele of arr4) {
//     console.log(ele);
// }

// let array = [1,2,3,4,5];
// newArray = [];
// for (const iterator of array) {
//     newElement = iterator*2;
//     newArray.push(newElement);
// }
// //Filter is for filtering, map is for changing the values of elements within array
// newArray2 = array.map(ele => ele*3);
// console.log(newArray2);

// let today = new Date();
// console.log(today.getYear() + 1900);
// console.log(today.get());

function adjacentElementsProduct(inputArray) {
    if (inputArray.length >=2 && inputArray.length <= 10) {
    let maxNum = Math.min.apply(Math, inputArray);
    let minNum = Math.max.apply(Math, inputArray);
        if (minNum >= -1000 && maxNum <=1000) {
            bestProduct = minNum;
        for(i=0;i<inputArray.length-1;i++) {
            currentProduct = (inputArray[i] * inputArray[i+1]);
            (currentProduct > bestProduct) ? bestProduct = currentProduct : bestProduct;
        }
        return (bestProduct);
        }
    }
}
inputArray = [3, 6, -2, -5, 7, 3];
adjacentElementsProduct(inputArray)
function sumMax(arr){
    arr = arr.sort((a,b) => a-b);
    return arr[arr.length - 1]+ arr[arr.length - 2];
}
const arr = [2,5,9,6,43,3];
const arr1 = [-5,-9,34,2,1,64];

console.log(sumMax(arr));
console.log(sumMax(arr1));
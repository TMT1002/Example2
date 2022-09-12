function duplicate(arr1,arr2){
    var newArr = [];
    for(var i of arr1){
        for(var j of arr2){
            if(i==j)
            newArr.push(i);
        }
    }
    return newArr;
}

const arr1 = [1,3,5,7,8,9];
const arr2 = [2,4,5,6,7,8];
var arr3 = [];
var arr4 = [];

console.log(duplicate(arr1,arr2));
console.log(duplicate(arr3,arr4));


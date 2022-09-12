const arr = [1,5,6,3,4,2,4,8,9,0];

var newArr = [...new Set(arr)];
newArr.sort((a,b) => a-b);

console.log(newArr);
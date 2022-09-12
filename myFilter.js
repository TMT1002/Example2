Array.prototype.myFilter = function(callback){
    var newArray = [];
    for(var i = 0; i < this.length; i++){
        if(this[i] == null)
        continue;
        if(callback(this[i]))
        newArray.push(this[i]);
    }
    return newArray;
} 

var arr = [1,5,7,9,12,46];

function checknum(val){
    return val > 5;
}

var newArray = arr.myFilter(checknum);
var newArr = arr.filter(checknum); 
console.log(newArray);
console.log(newArr);

delete arr[3];   // xoá phần tử số 3

arr[2] = null;   // gán giá trị cho phần tử số 2 là null

var newArray = arr.myFilter(checknum);
var newArr = arr.filter(checknum); 
console.log(newArray);
console.log(newArr);

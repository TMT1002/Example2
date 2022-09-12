function checkSumArray(sum,arr){
    var newArr = [];
    var resultArray = [];
    var array = [];
    for(var i of arr){
        newArr[i] = 1;
    }
    for(var i = 0; i < newArr.length; i++){
        if(newArr[i]==1)
        resultArray.push(i);
    }
    for(var i = 0; i < resultArray.length - i; i++){
        for(var j = resultArray.length - 1; j > i; j--){
            if(resultArray[i]+resultArray[j]==sum){
                array.push([resultArray[i],resultArray[j]]);
                break;
            }
        }
    }
    return array;
}

const arr = [4,6,7,2,1,7,8,9,10,4,5,7,3,5,8,1,2,3,4,5,6,3,2,1,7,8];

console.log(checkSumArray(10,arr));


const arr1 = [1,3,4,6,7,8,4,2,3,1,3];
const arr2 = [2,3,4,2,2,4,32,4,5,12,2,6,7,8,3];

function newArr(arr1,arr2){
    var array = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i]==arr2[j])
                array.push(arr1[i]);
        }
    }
    array = [...new Set(array)];
    return array;
}

console.log(newArr(arr1,arr2));
Array.prototype.myReduce = function(callback){
    var result = this[0];
    for(var i = 1; i < this.length; i++){
        if(this[i] == null)
        continue;
        result = callback(result,this[i]);
    }
    return result;
}

var arr = [4,6,7,8,9];

function sum(val1,val2){
    return val1-val2;
}

console.log(arr.myReduce(sum));


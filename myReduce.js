Array.prototype.myReduce = function(callback,init){
    var i = 0;
    var result = this[i];
    if(init!==null&&init!==undefined){
        result = init;
        result = callback(result,this[i]);
    }
    for(i = 1; i < this.length; i++){
        if(this[i] == null)
        continue;
        result = callback(result,this[i]);
    }
    return result;
}


const arr = [8,5,3,7,2,5]

const myArr = arr.myReduce((acc, cur) => {
    acc.total += cur;
    acc.doubleArr.push(cur * 2);
    return acc;
}, {total: 0, doubleArr: []});

const myArr1 = arr.myReduce((acc, cur) => {
    acc.total += cur;
    acc.doubleArr.push(cur * 2);
    return acc;
}, {total: 0, doubleArr: []});

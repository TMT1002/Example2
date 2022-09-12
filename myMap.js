Array.prototype.myMap = function(callback){
    var output = [];
    for(var i = 0; i < this.length; i++){
        if(this[i]==null)
        continue;
        output.push(callback(this[i]));
    }
    return output;
}


var Thuyet = [
    "Tran Minh Thuyet", 
    22, 
    "Hai Duong"
];

var number = [1,2,3,4,5,6];

number.myMap((item) => {
    console.log(item*2);
});




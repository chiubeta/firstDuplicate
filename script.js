var a = [ 2, 1, 4, 5, 3, 2 ];
var b = [ 2, 4, 5, 1, 3 ];
var c = [ 2, 1, 3, 5, 3, 2 ];

function duplicate(input) {
    var result = new Set();

    for(var i=0,len=input.length; i<len; i++){
        if(result.has(input[i])){
            return input[i];
        } else {
            result.add(input[i]);
        }
    }
    return -1;
}

console.log(duplicate(a)); // 2
console.log(duplicate(b)); // -1
console.log(duplicate(c)); // 3
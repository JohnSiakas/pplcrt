var x = [234,5,234,12,5,23,23457,23452346,39081,123,2,6,345,37,345,346,123,346,14435];
var max =x[0]
var position = 0
for(i=0;i < x.length;i++){
    if(x[i] > max){
        max =x[i]
        position = i
    }
}
console.log(`the largest number is ${max} and it is in the ${position}th position`);
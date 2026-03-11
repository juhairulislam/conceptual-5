// rest operator use for function parameter ; rest operator must be stay in last of parameter 
function myFunc(a,b,...rest){
    console.log(a,b,rest)
}

myFunc(12,3,4,5,5,56,6,7,666) ;

// spread operator 
let arr = [2,4,4,6,6,7666,7,8] ;
let arr2 = [456,6775,4,34,3,2] ;

let arr3 = [...arr , arr2] ;
console.log(arr3)

// spread use for integrate array or object ;
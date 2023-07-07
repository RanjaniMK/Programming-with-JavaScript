//Without  default parameters 
function noDefaultParams(number){

    console.log('Result:', number *number)
}

noDefaultParams(); // Result:NaN



//with default parameters

function withDefaultParams(number = 10){

    console.log('Result:' , number* number)
}
    withDefaultParams(); //Result =100
    withDefaultParams(4);//Result =16, after passing custom argument value 4



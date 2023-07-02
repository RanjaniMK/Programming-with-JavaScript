function addTwoNums(getNumber1,getNumber2){ //HOF
    console.log(getNumber1()+getNumber2()); //HOF
}

function randomNum() {

    return Math.floor ((Math.random()*10)+ 1) ;

}

function specificNum(){

    return 42;
}
var useRandom = true;
var getNumber;

if(useRandom){

    getNumber = randomNum
}

else {

    getNumber=specificNum
}

addTwoNums(specificNum, specificNum); //HOF
addTwoNums(specificNum, randomNum); //HOF
function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20); 

doubleIt(10).toString()


//combinimg my custom function calls as follows:
objectMaker( doubleIt(100) );
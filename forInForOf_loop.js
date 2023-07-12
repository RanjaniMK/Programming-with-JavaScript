const car ={

    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar=Object.create(car);
sportsCar.speed='fast';
console.log("The sportsCar object:", sportsCar);




console.log(".....for-in is unreliable.......");
for(prop in sportsCar){//Note 1
    console.log(prop);
}
console.log("Iterating over the object and its prototype!");// Note1






console.log("....for-of is reliable.....");
for(prop of Object.keys(sportsCar)){ //Note2

    console.log(prop+ ":"+sportsCar[prop]);
}

console.log("Iterating over object's own properties only!"); //Note2
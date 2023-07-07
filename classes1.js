class Train {

    constructor(color, lightsOn){

        this.color=color;
        this.lightOn= lightsOn;
    }
}

var myFirstTrain= new Train('red',false);
console.log(myFirstTrain)
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train ('blue',false);



//constructor function = constructor
//Custom constructor function creation is as follows:

function Icecream(flavor){

    this.flavor=flavor;
    this.meltIt= function(){

        console.log('The ${this.flavor} ice cream has melted');
    }
    

}

//Making as many ice creams as you want:

let kiwiIcecream= new Icecream("Kiwi");
let appleIcecream= new Icecream("apple");

kiwiIcecream;
appleIcecream;
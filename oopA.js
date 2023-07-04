//purchase1 objet
var purchase1={

    shoes:100,
    stateTax:1.2,
    totalPrice: function(){
        var calculation= purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
}

purchase1.totalPrice();
purchase1.shoesPrice;
purchase1.stateTax;


//purchase2 object

var purchase2 = {

    shoes:50,
    stateTax:1.2,
    totalPrice: function(){

        var calculation= purchase2.shoes *purchase2.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();
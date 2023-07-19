//creating an array

let top3 =["The Colossuem", "Trevi Fountain", "The Vatican City"]


//creating a function

function showItinerary(place1, place2, place3){

    console.log("Visit " +place1)
    console.log("Then visit " + place2)
    console.log("Finish with a visit to " +place3)
}

//showItinerary(top3[0], top3[1], top3[2])// old way
showItinerary(...top3) 
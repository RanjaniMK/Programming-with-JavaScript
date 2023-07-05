const bicycle ={

    bell: function(){

        return "Ring ring!Watch out please!"
    }
}

const door={

    bell: function(){

        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell();
door.bell();

// Making the code polymorphic by adding another function:

function ringTheBell(thing){ //thing is the object

    console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door);
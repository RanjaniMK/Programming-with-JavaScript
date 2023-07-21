const top7 =["The Colosseum",
            "The Roman Forum",
            "The Vatican",
            "Trevi Fountain",
            "The Pantheon",
            "Piazza Venezia",
            "The Palatine Hill"
]

//Destructuring

const[] = top7;
const[first, second, third, ...secondVisit] = top7;

console.log(top7)
// (7) ['The Colosseum', 'The Roman Forum', 'The Vatican', 'Trevi Fountain', 'The Pantheon', 'Piazza Venezia', 'The Palatine Hill']
//undefined
console.log(first)
//1 The Colosseum
//undefined
console.log(secondVisit)
// (4) ['Trevi Fountain', 'The Pantheon', 'Piazza Venezia', 'The Palatine Hill']
//undefined
console.log(third)
//1 The Vatican
//undefined
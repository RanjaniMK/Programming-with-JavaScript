
//PART 1
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}


//PART 2

var h1 = document.createElement('h1')
//undefined
h1.innerText="Type inot the input to make this text change"
//'Type inot the input to make this text change'
var input = document.createElement('input')
//undefined
input.setAttribute('type','text')
//undefined

document.body.innerText =''
//''
document.body.appendChild(h1);
//<h1>​Type inot the input to make this text change​</h1>​
document.body.appendChild(input);
//<input type=​"text">​


//PART 3A

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
})

//PART 3B

var h1 = document.createElement('h1')
//undefined
h1.innerText = "Type into the input to make this text change"
//'Type into the input to make this text change'
var input = document.createElement('input')
//undefined
input.setAttribute('type', 'text')
//undefined
document.body.innerText = '';
//''
document.body.appendChild(h1);
//<h1>​Type into the input to make this text change​</h1>​
document.body.appendChild(input);
//<input type=​"text">​
input.addEventListener('change', function() {
    h1.innerText = input.value
    })
//undefined
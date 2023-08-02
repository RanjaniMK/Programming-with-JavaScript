//User-triggered events(in the console)

<button type ="button"  class= "btn btn-lg btn-primary" onclick = "clickHandler()" >Primary button</button>


//listen for an event

const target=document.querySelector('body')
function handleClick(){

    console.log('clicked the body')
}

target.addEventListener('click',handleClick)
//


function handleClick2(){

    console.log('Clicked the heading')
}

//Now in the elements, editing the h1 element

<h1 onclick= "handleClick2()"> Example Domain</h1>

// Now check h1 by hovering over the webpage(left hand side) and check the output in the console tab too.

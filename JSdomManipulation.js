document.body.innerText="Hello"
//'Hello'
const h2 = document.createElement('h2')
//undefined
h2.innerText="This is an h2 heading"
//'This is an h2 heading'
h2.setAttribute('id', 'sub-heading')
//undefined
h2.setAttribute('class', 'secondary')
//undefined
h2
//<h2 id=​"sub-heading" class=​"secondary">​This is an h2 heading​</h2>​
document.body.appendChild(h2)
//<h2 id=​"sub-heading" class=​"secondary">​This is an h2 heading​</h2>​
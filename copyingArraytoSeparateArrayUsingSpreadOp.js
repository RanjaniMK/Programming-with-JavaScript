// You can copy an array into a completely separate array, also using the spread operator, like this:

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2) //check
//using parse method to convert JSON string to Javascript Object
//undefined
'{"greeting":"hello"}' //a JSON string
'{"greeting":"hello"}'
const jsonstr ='{"greeting":"hello"}'
//undefined
JSON.parse(jsonstr)
//{greeting: 'hello'}
const aPlainObj = JSON.parse(jsonstr)
//undefined
aPlainObj.greeting='hi'
//'hi'
aPlainObj.greeting='hi'
//'hi'
aPlainObj
//{greeting: 'hi'}
//using stringify to convert Javascript Object to JSON string
//undefined
const data = {
    firstName: "John",
    lastName:"Doe",
    greeting:"Hello",
}
//undefined
JSON.stringify(data)
//'{"firstName":"John","lastName":"Doe","greeting":"Hello"}'
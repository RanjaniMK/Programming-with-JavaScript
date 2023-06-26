var clothes =[]
clothes.push("shirt")
clothes.push("pants")
clothes.push("socks")
clothes.push("jacket")
clothes.push("belt")
clothes.pop("belt")
clothes.push("ribbon")
console.log(clothes[2])


var favCar ={}
favCar.color =" blue"
favCar.convertible = true
var arrayOFkEYS = ["color","convertible"]
for (var i = 0; i< arrayOFkEYS.length; i++){

    console.log(favCar[arrayOFkEYS[i]])
}
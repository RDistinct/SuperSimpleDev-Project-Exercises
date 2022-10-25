function toUpper(str){
    return str.toUpperCase();
}
console.log(toUpper(ben));  //BEN

//2 REMOVE ITEM ABOVE FREEZING POINT Fahrenheit = 32
function aboveFreezing(arrNum){
    return arrNum.filter(value => value >= 0)
}

const temps = [-5,-10,0,10,20,50,100]
console.log(aboveFreezing(temps)); //OUTPUT [0, 10, 20, 50, 100]

//3 REMOVE ITEM WITH COLOR RED
function removeRed(arrObj){
    return arrObj.filter(value => value.color !== 'red')
}

const foodArray = [
  { name: "Apple", color: "red" },
  { name: "Egg", color: "white" },
];
console.log(removeRed(foodArray));
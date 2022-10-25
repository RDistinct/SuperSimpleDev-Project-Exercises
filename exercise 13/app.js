//1. RETURN THE LARGEST NUMBER IN THE ARRAY - we will use the reduce method with the Math.max that returns the largest of the numbers
function max(arrNum){
    return arrNum.reduce((a,b) => Math.max(a,b))
}

const numbers = [1,5,-2,4,3,5,0]
console.log(max(numbers)); //5

//2. RETURN THE SMALLEST NUMBER IN THE ARRAY
function min(arrNum){
    return arrNum.reduce((a,b) => Math.min(a,b));
}
console.log(min(numbers)); //-2

//3. RETURN THE SMALLEST NUMBER IN THE ARRAY that is greater than 0 - use Infinity

function minAboveZero(arrNum){
    let min = Infinity;  //Infinity is a numeric value representing infinity.Its value is positive infinity 
     arrNum.map(value => {
        if (value < 0){
            return; 
        }
        else if( value < min ){
            min = value
        }
    })
    return min;
}
console.log(minAboveZero(numbers));//0

//4.FFUNCTION THAT TAKES AN ARRAY OF STRINGS & REMOVES THE FIRST TWO OCCURRENCE OF APPLE
function pickApples(strArr){
    //this function works specifically when value of fruit is 'Apple'
    //use a variable to track our picked  fruit
    let pickedFruit = 0;

    const arrValue = strArr.filter(fruit => {
        if(pickedFruit >=2 ){
            return true;
        }else if(fruit === 'apple'){
            pickedFruit = pickedFruit + 1; //reassign picked fruit
            return false; //this removes the value from the array being returned by the filter function. 
        }else{
            return true;
        }
    })

    return arrValue;
}
pickApples(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);//OUTPUT:['cherry', 'orange', 'banana', 'apple']

//REMOVES 2 APPLES AND 1 ORANGE
function pickFruits(strArr){
    let appleVal = 0;
    let orangeVal = 0;

   const arrValue =  strArr.filter(fruit => {
        if(fruit === 'apple'){
            if(appleVal >= 2){
                return true; //coz we want to remove 2 instances of apple
            }else{
                appleVal = appleVal + 1;
                return false;
            }
        }else if(fruit === 'orange'){
            if (orangeVal >= 1){
                return true;
            }else {
                orangeVal = orangeVal + 1;
                return false;
            }
        }else{
            return true;
        }
    })
    return  arrValue;
} 
pickFruits(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);//OUTPUT: ["cherry", "banana", "apple"]

//REMOVES THE LAST 2 APPLES FROM THE ARRAY
function removeLastApples(strArr){
    let appleVal = 0;

    const reverseArr = strArr.reverse();

    const arrValue = reverseArr.filter(fruit => {
        if(appleVal >=2){
            return true;
        }else if( fruit === 'apple'){
            appleVal = appleVal + 1;
            return false;
        }else {
            return true;
        }
    })
    //reverse the array back
    return arrValue.reverse();
}
pickApples(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);//OUTPUT:// ["cherry", "apple", "orange", "banan...]
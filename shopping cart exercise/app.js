/**
 * 1. grab buttons & cart id
 * 2. create a function that creates a div and appends it to cart.Evary time a button is pressed, this function gets called. 
 * 3. create a function that resets the cart once Clear button is pressed.
 */

const appleBtn = document.getElementById('apple');
const tomatoBtn = document.getElementById('tomato');
const eggsBtn = document.getElementById('eggs');
const clearBtn = document.getElementById('clear');
const cart = document.getElementById('cart');

const appleBtnValue = appleBtn.innerText;
const tomatoBtnValue = tomatoBtn.innerText;
const eggsBtnValue = eggsBtn.innerText;


console.log(appleBtn.innerText); //APPLE

//createElem()
function createElem(param){
   const cartElem = document.createElement('div');
   cartElem.innerText = param;
    cart.appendChild(cartElem)
}

function clearCart(){
    cart.innerHTML = "" //reset the cart to empty
}

appleBtn.addEventListener('click', () =>{createElem(appleBtnValue)})

tomatoBtn.addEventListener('click', () =>{createElem(tomatoBtnValue)});

eggsBtn.addEventListener('click', () =>{createElem(eggsBtnValue)});

clearBtn.addEventListener('click', () => {clearCart()});


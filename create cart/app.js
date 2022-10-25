let total = 0;

const cart = document.getElementById('cart')

function createCart(obj){
    
    const list = Object.keys(obj) //returns array of property names
    console.log(list)

    list.map(value => {
        
        //Add element to div
        const newDiv = document.createElement('div');
        const price = obj[value]
        newDiv.innerHTML = value + ' $' + price;
       //cart.appendChild(newDiv)
        console.log(price)
        //console.log(value)
        
        //Add button to elem
        const btn = document.createElement('button');
        btn.innerText = 'Add'
        btn.onclick = function ( ){
            total = total + price;
            console.log(total)      //shows cumulative value of total
        }
        newDiv.appendChild(btn);

        cart.appendChild(newDiv);
    });
}
createCart({ Apple: 3, Orange: 4, Egg: 2 })


/**
 * 1.create a list of object property names using Object.key
 * 2.Loop through the names & create a div elementJ(newDiv)
 * 3.obtain the price of item by obj[value]. this means:
 *          obj = {Apple: 3, Orange: 4, Egg: 2}
 *          obj[value] can be obj['Apple'], or obj.Apple
 * 4.assign price & item to newDiv innerHTML
 * 5.create button & assign an onclick to it that adds value of total cumulatively,meaning it doesnt reset the value but adds on top of the initial.
 * 6.append the button to newDiv & append newDiv to cart div
 */
const fruits = {Apple: 1, Orange: 2, Egg: 3}
console.log(fruits.Apple) || console.log(fruits['Apple']) // OUTPUT is 1. This is the same thing we are doing in step 3
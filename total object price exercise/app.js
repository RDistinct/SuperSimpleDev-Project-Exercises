const cart = [
  { name: "Apple", price: 5, quantity: 2 },
  { name: "Orange", price: 3, quantity: 3 },
  {name: "Peach", price: 4, quantity: 5},
  {name: "Banana", price: 2, quantity: 10}
];

//CALCULATE TOTAL
function cartTotal(param) {
  let total = 0; //initialize total variable
  param.map((obj) => {
    total = total + obj.price * obj.quantity;
  }); //loop over obj items and store value of first obj in total, then add total for the whole cart after looping the second obj item.total = obj.price * obj.quantity; will show 10 & 9 separately
  console.log(total);//19
  return total
}
//cartTotal(cart)

//DISPLAY THE RECEIPT & TOTAL
function displayReceipt(arrParam) {
  document.getElementById("receipt").innerHTML = "";

  arrParam.map((obj) => {
    const arrElem = document.createElement("div");
    arrElem.innerText =
      obj.name +
      " " +
      "$" + 
      obj.price + " " +
      "*" + " " +
      obj.quantity + " " +
      "= " +
      obj.price * obj.quantity;
    const receipt = document.getElementById("receipt");
    receipt.appendChild(arrElem);
  });
  //display total
  const cartSum = document.createElement("div");
  cartSum.innerText ='Cart total: ' + cartTotal(cart);
  receipt.appendChild(cartSum);
}

displayReceipt(cart);

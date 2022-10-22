/**
 * create a text box, 2 buttons - convert to cm & convert to inch
 * function to take textbox value,convert the value to number by placing the plus sign before the value eg console.log(+'10') ==> 10
 * create a div result and appenf the value to the div
 */
const result = document.getElementById('result');
const inchToCm = 2.54 ;

function convertToCm(){
    const textBox = document.getElementById('text-box').value;
    const ans =  + textBox * inchToCm
   // console.log(ans)
    result.innerText = ans;
}

const cmBtn = document.getElementById('cmBtn');
cmBtn.addEventListener('click', convertToCm)

function convertToInches(){
    const textBox = document.getElementById('text-box').value;
    const ans =  + textBox / inchToCm
    //console.log(ans)
    result.innerText = ans;
}
const inchBtn = document.getElementById('inchBtn');
inchBtn.addEventListener('click', convertToInches)
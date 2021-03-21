
/* variables */

const btnBcg = document.getElementById("btn-bcg")
const bodyElement = document.getElementById('body');





/* eventlistener for click. 1. Create an object with the hexadecimal numbers. 
2. Create a for loop 6 digits long and push a random digit that is 16 or less that will lookup the object. 
3. Push the looked up value into the array. 
4. Join the array to get a 6 digit hexadecimal value plus the # pound sign prefixed.
5. Change the body element by first targeting the body element and then updating the bcgColor variable as done at the bottomm of the callback function below.

*/

btnBcg.addEventListener("click", () => {

let arrColor = ["#"];
let  digits = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "0",
    8: "1",
    9: "2",
    10: "3",
    11: "4",
    12: "5",
    13: "6",
    14: "7",
    15: "8",
    16: "9",    
}
for(let i = 1; i <=6; i++){
  var randomDigit = Math.floor(17*Math.random());
    arrColor.push(digits[randomDigit])
}
let bcgColor = arrColor.join("");
bodyElement.style.setProperty('--bcgColor', bcgColor);
    
})








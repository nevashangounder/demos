
//get values
const display = document.getElementById("display")
let btns = document.querySelectorAll(".num-btn");
let input = '';

btns.forEach(btn => {

    btn.addEventListener("click", () => {
        input += btn.getAttribute("data-num");
        display.value = input;

})

})

//clear display

let cleanBtn = document.querySelector(".clear-btn");

cleanBtn.addEventListener("click", () => {
    input = '';
    display.value = input;
})

//calculate answer

let equalBtn = document.querySelector(".equal-btn");
let answer;
equalBtn.addEventListener("click", () => {
    display.value = eval(input)
})


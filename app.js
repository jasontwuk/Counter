// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// check which buttons has been chlicked
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        // get the class name from the clicked button
        const btnClasses = e.currentTarget.classList;
        // if the button is increase, count add one
        if(btnClasses.contains("increase")){
            count++;
        // if the button is decrease, count minus one
        } else if (btnClasses.contains("decrease")){
            count--;
        // if the button is reset, reset count to zero
        } else {
            count = 0;
        }

        // change value's color according to count
        if(count > 0){
            value.style.color = "royalblue";
        } else if (count < 0){
            value.style.color = "OrangeRed"
        // if count is zero
        } else {
            value.style.color = "#222";
        }

        // display the result to the screen
        value.textContent = count;
    })
});
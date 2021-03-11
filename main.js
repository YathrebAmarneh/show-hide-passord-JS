const myInput = document.getElementById('my-input')
const myButton = document.getElementById('my-button')

console.log(myInput, myButton)


myButton.onclick= function() {

'use strict';

    if(myButton.textContent === "Show Password") {
        myInput.setAttribute("type", "text")
        this.textContent = "Hide Password"
    }else{
        this.textContent = "Show Password"
        myInput.setAttribute("type", "password")
    }
}

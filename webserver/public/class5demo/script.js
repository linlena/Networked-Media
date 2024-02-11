const colors = ["cyan", "blue", "lightgreen", "yellow", "violet"]

// loads the page
window.onload = () => {

    for (let i = 0; i <50; i++) {
        // add HTML tags with js
        const span = document.createElement("span")

        // requires text before modifying to time
        const node = document.createTextNode("this is element" + i + " ")

        // adding text to the span
        span.appendChild(node) 

        // add class to span 
        span.classList.add('text-body');

        // changing the background color with js
        span.style.backgroundColor = randomColor(colors);

        // adding the finished span element to the document
        document.body.appendChild(span);
    }
    // setInterval js function: takes 2 parameters
    // 1.) callback function: executes some code every x ms
    // 2.) number of ms for the callback function
    setInterval(callbackFn, 1000)
}

// helper function that recreates p5's random(array) with plain js
function randomColor(arr) {
    // Math.random() returns value between 0-1
    // Math.random() = p5 random()

    // formula to calculate random number with no decimals
    let index = Math.floor(Math.random() * arr.length)

    return arr[index];
}

function callbackFn() {
    const date = new Date();
    // date.toUTCString()

    let numSpan = document.getElementsByClassName('text-body');

    for (let i = 0; i < numSpan.length; i++) {
        numSpan[i].textContent = date.toUTCString()
    }
}
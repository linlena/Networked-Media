window.onload = () => {
    const button = document.getElementById('button')
    
    // button.onclick = () => {
    //     console.log('button has been clicked')
    // }

    // button.addEventListener("Click", mouseClickHandler)

    button.addEventListener("click", () =>{
        console.log('button has been clicked in a third way')

        const container = document.getElementById("container")

        if(container.classList.contains("day")){
            container.classList.add('night')
            container.classList.remove('day')
            button.textContent = 'lights on'
        } else {
            container.classList.remove('night')
            container.classList.add('day')
            button.textContent = 'lights off'
        }
    })

    button.addEventListener("mouseenter", () =>{
        console.log('mouse has entered')
    })

    button.addEventListener("mouseleave", () =>{
        console.log('mouse has left')
    })

    const text = document.getElementById("text")
    document.addEventListener('keydown', (e) => {
            console.log(e.key)

            let newText = e.key
            let oldText = text.innerHTML
            text.innerHTML = oldText+newText

            if(newText == "Enter"){
                newText = "<br/>"
            }
        })

}

function mouseClickHandler(){
    console.log('button has been clicked in a different way')
}

// LOOK AT SAM'S NOTES FOR THIS DEMO, TEXT WON'T ENTER PROPERLY AND TEXT STAYS BLACK WHEN LIGHTS ARE OFF
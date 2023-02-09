let container = document.querySelector('.container')
let button = document.querySelector('a')
let displayHex = document.querySelector('p')

const validChar = '0123456789ABCEDF'
const hexLength = 6

//random number function 
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//random hex code from random number function
function getRandomColor() {
    let color = '#'
    for(i = 0; i < 6; i++) {
        let getRandomChar = validChar.charAt(randomIntFromInterval(0, 15))
        color += getRandomChar
    }

    displayHex.innerHTML = color
    container.style.backgroundColor = color
    
}

getRandomColor()

//displays new color when button is clicked
button.addEventListener('click', function() {
    getRandomColor()
}, false)
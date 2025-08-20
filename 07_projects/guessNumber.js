

let rand = parseInt(Math.floor((Math.random()*100+1)))
console.log(rand);


const input = document.querySelector('#numberInput')

const submit = document.querySelector('#submit')

const prevguess = document.querySelector("#previousguess")
const remaining = document.querySelector("#remainingchances")

const guessremain = document.querySelector(".guessremain")

const lowOrHi = document.querySelector("#lowOrHi")


const p = document.createElement('p')
let playGame = true;
let prevGuess = []
let numGuess = 1

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(input.value)
        validateGuess(guess)
        
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        displayMessage('Please enter number greater than 1');
        
    }else if(guess > 100){
        displayMessage('Please enter number less than 100');
        
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over and the Random number is ${rand}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === rand){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < rand){
        displayMessage(`Number is TOO LOW`)
    }
    else{
        displayMessage(`Number is TOO HIGH`)
    }
}

function displayGuess(guess){
    input.value = ''
    prevguess.innerHTML+= `${guess} `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(guess){
    playGame = false
    input.value = ''
    input.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    p.style.cursor = "pointer"
    guessremain.appendChild(p)
    newGame()
}
function newGame(){
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click',(e)=>{
        guessremain.removeChild(p)
        rand = parseInt(Math.floor((Math.random()*100+1)))
        prevGuess = []
        numGuess = 1
        prevguess.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        input.removeAttribute('disabled')
        playGame = true
        lowOrHi.innerHTML = ''
        
    })
}


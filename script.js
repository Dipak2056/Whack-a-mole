const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');

let result = document.querySelector('#score');
let score = 0;

let currentTime = timeLeft.textContent

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')


    //assign the id of the random positon
    hitPosition = randomPosition.id
}
square.forEach(id => {
    id.addEventListener('mouseup',()=>{
        if(id.id === hitPosition){
            
            score = score + 1
            result.textContent = score
        }
    })
})

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare,1000);
}
moveMole();
function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert('Game Over! Your final score is ' +score)
        window.location.reload();
    }
}
let timerId = setInterval(countDown,1000);
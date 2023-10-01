//HTML Elements
const startBtn = document.querySelector('#startButton');
const progressBar = document.querySelector('#progress-bar div');
const divHidden = document.querySelector('#stats')
const correctWords = document.querySelector('#correct span');
const errorWords = document.querySelector('#errors span');
const velWPM = document.querySelector('#wpm span');
const restartBtn = document.querySelector('#restart')

//Var
const playTime = 3;

//functions
function start(){
    console.log("START");
    progressBar.classList.toggle('timeComplete', true);
    startBtn.classList.toggle('hidden', true);
    divHidden.classList.toggle('hidden', true);
}

function newWord(){
    const Wordnum = Math.floor(Math.random()*length);
    const chosenWord
    console.log(Wordnum);
}

//Events
startBtn.addEventListener("click",() =>{start();})
restartBtn.addEventListener("click",() =>{start();})

progressBar.addEventListener("animationend",() =>{
    console.log("The time is end.");
    progressBar.classList.toggle('timeComplete', false);
    divHidden.classList.toggle('hidden', false);
    correctWords.textContent = "CHANGE";
    errorWords.textContent = "CHANGE";
    velWPM.textContent = "CHANGE";
})


//Execution
document.documentElement.style.setProperty("--time", playTime+"s");
newWord();
let gameArea = document.getElementById("gameArea")
let winScreen = document.getElementById("winScreen")

let userRock = document.getElementById("userRock")
let userPaper = document.getElementById("userPaper")
let userScissor = document.getElementById("userScissor")

let compRock = document.getElementById("compRock")
let compPaper = document.getElementById("compPaper")
let compScissor = document.getElementById("compScissor")

let scoreCard = document.getElementById("scoreCard")
let winStatu = document.getElementById("winStatu")

let userValue, compValue, whoWin,  userScore, compScore;

userValue = compValue = whoWin = userScore = compScore = 0;

winScreen.style.display = "none";

//0 => comp  1 => user  2=> tie

function updateValue(i) {
    userValue = i;

    if (userValue == 1)
        userRock.classList.add("scale")

    else if (userValue == 2)
        userPaper.classList.add("scale")

    else
        userScissor.classList.add("scale")

    computerValue()
}

function computerValue() {
    let randomNum = Math.random() * 100;

    if ((randomNum >= 0) && (randomNum <= 33))
        compValue = 1

    else if ((randomNum > 33) && (randomNum <= 66))
        compValue = 2

    else
        compValue = 3

    if (compValue == 1)
        compRock.style.transform = "scale(1.2)"

    else if (compValue == 2)
        compPaper.style.transform = "scale(1.2)"

    else
        compScissor.style.transform = "scale(1.2)"

    isWin()
}

function isWin() {
    if ((userValue == 1) && (compValue == 2) || (userValue == 2) && (compValue == 3) || (userValue == 3) && (compValue == 1))
        whoWin = 0

    else if ((userValue == 1) && (compValue == 3) || (userValue == 2) && (compValue == 1) || (userValue == 3) && (compValue == 2))
        whoWin = 1

    if (userValue == compValue)
        whoWin = 2

    if (whoWin == 1)
        userScore++

    if (whoWin == 0)
        compScore++

        scoreCard.innerHTML = userScore + " : " + compScore

    diseable()

    setTimeout(() => {
        restore()
    }, 2000);
}

function diseable() {
    userRock.onclick = userPaper.onclick = userScissor.onclick = ''

    if (userValue == 1) {
        userPaper.classList.remove("hover")
        userScissor.classList.remove("hover")
        userPaper.classList.remove("scale")
        userScissor.classList.remove("scale")
    }

    else if (userValue == 2) {
        userRock.classList.remove("hover")
        userScissor.classList.remove("hover")
        userRock.classList.remove("scale")
        userScissor.classList.remove("scale")
    }


    else {
        userRock.classList.remove("hover")
        userPaper.classList.remove("hover")
        userRock.classList.remove("scale")
        userPaper.classList.remove("scale")
    }
}

function restore() {
    isFinish()

    userRock.onclick = () => { updateValue(1) };
    userPaper.onclick = () => { updateValue(2) };
    userScissor.onclick = () => { updateValue(3) };

    userRock.classList.remove("scale")
    userPaper.classList.remove("scale")
    userScissor.classList.remove("scale")

    userRock.classList.add("hover")
    userPaper.classList.add("hover")
    userScissor.classList.add("hover")

    compRock.style.transform = compPaper.style.transform = compScissor.style.transform = "scale(1.0)"

    userValue = compValue = whoWin = 0;
}


function isFinish() {
    if(userScore == 5 || compScore == 5){
        gameArea.style.display = "none";
        winScreen.style.display = "block";
        winStatu.innerHTML = "WIN"

        winStatu.innerHTML = (userScore == 5) ? "WIN" : "LOOSE"
    }

    // if(compScore == 5){
    //     gameArea.style.display = "none";
    //     winScreen.style.display = "block";
    //     winStatu.innerHTML = "LOOSE"
    // }
}

function playAgain() {
        gameArea.style.display = "block";
        winScreen.style.display = "none";
        userScore = compScore = 0
        scoreCard.innerHTML = userScore + " : " + compScore
}
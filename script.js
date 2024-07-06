let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let colBtn = document.querySelector("#colBtn");
let body = document.querySelector("body");
let bodyCol = "light";
let heading = document.querySelector(".heading");

let userScoreID = document.querySelector("#user-score");
let compScoreID = document.querySelector("#comp-score");

colBtn.addEventListener("click", () => {
    if (bodyCol == "light") {
        bodyCol = "dark";
        body.classList.add("dark");
        heading.classList.add("darkHead");
        msg.classList.add("darkMsg");
        colBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        colBtn.classList.add("darkBtn");

        choices.forEach(choice => {
            choice.classList.add("darkChoice");
        });
    } else {
        bodyCol = "light";
        body.classList.remove("dark");
        heading.classList.remove("darkHead");
        msg.classList.remove("darkMsg");
        colBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        colBtn.classList.remove("darkBtn");

        choices.forEach(choice => {
            choice.classList.remove("darkChoice");
        });
    }
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIDX = Math.floor(Math.random() * 3);
    return options[randIDX];
};

const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again!";
    msg.style.backgroundColor = "#222222"
};

const winner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        userScoreID.innerText = userScore;
    } else {
        msg.innerText = `You lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++;
        compScoreID.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userChoice === "paper") {
            if (compChoice === "scissors") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else {
            if (compChoice === "rock") {
                userWin = false;
            } else {
                userWin = true;
            }
        }
        winner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
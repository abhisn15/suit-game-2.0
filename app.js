const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["Gunting", "Kertas", "Gunting"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/Salsa/${this.textContent}.png`;
          computerHand.src = `./assets/Abhi/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "WIDIHHH SERI CUYY😱😱😱😱";
      return;
    }
    //Check for Rock
    if (playerChoice === "Batu") {
      if (computerChoice === "Gunting") {
        winner.textContent = "YEAYYY KAMU MENANG KAMU KEREN BANGETTT!😍😍";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "YAHHH KAMU KALAH COBA LAGI YAHH SEMANGATSS KAMU PASTI BISAA GANBATTE!😊😊";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "Kertas") {
      if (computerChoice === "Gunting") {
        winner.textContent = "YAHHH KAMU KALAH COBA LAGI YAHH SEMANGATSS KAMU PASTI BISAA!😊😊";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "YEAYYY KAMU MENANG KAMU KEREN BANGETTT!😍😍";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "Gunting") {
      if (computerChoice === "Batu") {
        winner.textContent = "YAHHH KAMU KALAH COBA LAGI YAHH SEMANGATSS KAMU PASTI BISAA!😊😊";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "YEAYYY KAMU MENANG KAMU KEREN BANGETTT!😍😍";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();

function tick() {
	const jam = document.getElementById("jam");
	{
		jam.textContent = new Date().toLocaleTimeString();
	}
}

tick();

setInterval(function () {
	tick();
}, 1000);

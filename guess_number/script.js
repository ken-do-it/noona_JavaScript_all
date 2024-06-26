let computerNum = 0;
let PlayButton = document.getElementById("submit_guess");
let UserInput = document.getElementById("user-input");
let ResultDisplay = document.querySelector(".result");
let ResetButton = document.getElementById("reset_button");
let ChanceArea = document.getElementById("chance_area");
let history = [];
let Chance = 10;
let GameOver = false;
let LastChance = false;

document.getElementById("start-game").addEventListener("click", function() {
    document.getElementById("start_page").style.display = "none";
    document.getElementById("game_page").style.display = "block";
    RandomNumber();
});

document.getElementById("end").addEventListener("click", function() {
    document.getElementById("game_page").style.display = "none";
    document.getElementById("start_page").style.display = "block";
    reset();
});

ResetButton.addEventListener("click", reset);

PlayButton.addEventListener("click", play);

UserInput.addEventListener("focus", function () {
  UserInput.value = "";
});

// 엔터키 눌려도 작동함
UserInput.addEventListener("keypress", handleEnterPress);

function handleEnterPress(event) {
  if (event.key === "Enter") {
    play();
  }
}

function RandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

function play() {
  let UserValue = UserInput.value;

  if (history.includes(UserValue)) {
    ResultDisplay.textContent = "이미 입력한 값 입니다";
    return;
  }
  if (UserValue < 1 || UserValue > 100) {
    ResultDisplay.textContent = "1부터 100 사이의 값을 입력해주세요";
    return;
  }

  history.push(UserValue);

  if (UserValue == computerNum) {
    ResultDisplay.textContent =  `${computerNum}! 정답입니다`;
    GameOver = true;
  } else if (UserValue > computerNum) {
    ResultDisplay.textContent = "다운";
  } else if (UserValue < computerNum) {
    ResultDisplay.textContent = "업";
  }

  //게임 종료시 enter 키 작동 멈춤
  if (GameOver) {
    PlayButton.disabled = true;
    UserInput.removeEventListener("keypress", handleEnterPress);
    return;
  }

  Chance--;

  if (Chance < 1) {
    if (LastChance) {
      ResultDisplay.textContent = `실패!! 정답은 ${computerNum}입니다. 다시 도전해주세요`;
      GameOver = true;
      PlayButton.disabled = true;
      UserInput.removeEventListener("keypress", handleEnterPress);
    } else {
      LastChance = true;
      ResultDisplay.textContent = "마지막으로 한번 더";
      Chance = 1;
    }
  }

  ChanceArea.textContent = `남은 기회는 ${Chance}번`;
}

function reset() {
  UserInput.value = "";
  ResultDisplay.textContent = "결과는?";
  RandomNumber();
  Chance = 10;
  ChanceArea.textContent = `남은 기회는 ${Chance}번`;
  history = [];
  PlayButton.disabled = false;
  GameOver = false;
  LastChance = false;
  UserInput.addEventListener("keypress", handleEnterPress);
}

RandomNumber();

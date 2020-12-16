let inputName = document.querySelector(".inputName");
let submitBtn = document.querySelector(".submitName");
let greetingTxt = document.querySelector(".greetingTxt");
let inputDob = document.querySelector(".inputDob");
let submitDob = document.querySelector(".submitDob");
let showResult = document.querySelector(".result");
let sectionOne = document.querySelector(".sectionOne");
let sectionTwo = document.querySelector(".sectionTwo");
let playAgain = document.querySelector(".playAgain");

function submitBtnHandler() {
  if (inputName.value) {
    greetingTxt.innerText = "Welcome " + inputName.value;
    sectionOne.style.display = "none";
    sectionTwo.style.display = "block";
  } else {
    alert("Please enter your name");
  }
}

function submitDobHandler() {
  if (inputDob.value) {
    let birthDay = inputDob.value;
    var split = birthDay.split("/");

    var date = split[0];
    var month = split[1];

    if (isNaN(parseInt(date))) {
      alert("Please enter a valid DOB");
    } else {
      if (date >= 1 && date <= 31 && month >= 1 && month <= 12) {
        if (date >= 30 && month == 02) {
          alert("Please enter a valid date");
        } else {
          var count = 0;
          for (var i = 2; i < date; i++) {
            if (date % i == 0) {
              count++;
            }
          }
          if (count == 0) {
            showResult.innerText =
              "Congratulations your birthday is a prime number. Thank you for playing!!";
            playAgain.style.display = "block";
          } else {
            showResult.innerText =
              "Seems like your birthday is not a prime number. Thank you for playing!!";
            playAgain.style.display = "block";
          }
        }
      } else {
        alert("Please enter a valid DOB");
      }
    }
  } else {
    alert("Please enter your DOB");
  }
}

function gameLoopHandler() {
  sectionTwo.style.display = "none";
  sectionOne.style.display = "block";
  inputName.value = "";
  inputDob.value = "";
  showResult.innerText = "";
  playAgain.style.display = "none";
}

submitBtn.addEventListener("click", submitBtnHandler);
submitDob.addEventListener("click", submitDobHandler);
playAgain.addEventListener("click", gameLoopHandler);

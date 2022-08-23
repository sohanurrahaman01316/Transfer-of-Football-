function updatePerPlayerPrice() {
  let inputTextNum = costInput("per_player");
  if (isNaN(inputTextNum)) {
    alert("enter a valid number");
    return;
  }
  let selectPlayerCount = stringToNumber("select_players_count");
  let playerExpense = document.getElementById("player_expense");
  let finalExpensePlayerCost = inputTextNum * selectPlayerCount;
  playerExpense.innerText = finalExpensePlayerCost;
  let total = document.getElementById("total");
  total.innerText = finalExpensePlayerCost;
}

// calculate per player cost button
let calculatePerPlayerButton = document.getElementById("calculate_per_player");
calculatePerPlayerButton.addEventListener("click", function () {
  let upp = updatePerPlayerPrice();
  console.log(upp);
});

function calculateManagerAndCoach() {
  let inputTextManager = costInput("manager_cost");
  let inputTextCoach = costInput("coach_cost");
  let coachAndManagerCost = inputTextManager + inputTextCoach;
  return coachAndManagerCost;
}

function calculateTotalCost() {
  let selectPlayerCount = stringToNumber("player_expense");
  let coach = calculateManagerAndCoach();
  let sum = selectPlayerCount + coach;
  return sum;
}

let calculateTotal = document.getElementById("calculate_total");
calculateTotal.addEventListener("click", function () {
  let total = document.getElementById("total");
  total.innerText = calculateTotalCost();
  
});

function increasePlayerCount() {
  let selectPlayerCount = document.getElementById("select_players_count");
  let selectPlayerCountFunc = stringToNumber("select_players_count");

  let increasePervSelect = selectPlayerCountFunc + 1;
  let selectPlayerValue = (selectPlayerCount.innerText = increasePervSelect);

  if (selectPlayerValue == 5) {
    disaledSelectButton("select_button");
    disaledSelectButton("select_buttonRaihan");
    disaledSelectButton("player_select_btn_mbappe");
    disaledSelectButton("player_select_btn_ozil");
    disaledSelectButton("player_select_btn_pele");
    disaledSelectButton("player_select_btn_dibala");
    alert(`you added 5 players. you can't add more player`);
  }
  return selectPlayerValue;
}

function calculateExpensePerPlayer() {
  let selectPlayerCountNum = increasePlayerCount();
  let inputTextNum = costInput("per_player");
  console.log(inputTextNum.value);
  let finalExpensePlayer = selectPlayerCountNum * inputTextNum.value;
  return finalExpensePlayer;
}
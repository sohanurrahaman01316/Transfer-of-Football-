let changePlayerName = document.getElementById("willChangePlayerName");
let wherePlayerNameWillPush = document.getElementById("pushing_player_name");

// function for get player name
function getPlayerName(recivePlayerName) {
  let createLi = document.createElement("li");
  createLi.setAttribute("class", "playerItem");
  let playerId = (createLi.innerHTML = recivePlayerName.innerText);
  wherePlayerNameWillPush.appendChild(createLi);

  return playerId;
}

// function for disabled button
function disaledSelectButton(disableButtonPlayer) {
  let disableButtons = document.getElementById(disableButtonPlayer);
  disableButtons.setAttribute("disabled", true);
  disableButtons.style.background = "#4b4e50";
  disableButtons.style.cursor = "not-allowed";
}

// function for select 5 players input, convert string to number
function costInput(getInputId) {
  let inputText = document.getElementById(getInputId);
  let inputTextString = inputText.value;
  let inputTextNum = parseFloat(inputTextString);
  inputText.value = "";
  return inputTextNum;
}

// function for convert string to number. player expense, total, ect.
function stringToNumber(getStringId) {
  let playerElement = document.getElementById(getStringId);
  let playerElementString = playerElement.innerText;
  let playerElementNum = parseFloat(playerElementString);
  return playerElementNum;
}

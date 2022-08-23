let playerNameMessi = document.getElementById("playerNameMessi");
let selectButtonMessi = document.getElementById("select_button");
selectButtonMessi.addEventListener("click", function () {
  getPlayerName(playerNameMessi);
  disaledSelectButton("select_button");
  increasePlayerCount()
});

let playerNameRaihan = document.getElementById("playerNameRaihan");
let selectButtonRaihan = document.getElementById("select_buttonRaihan");
selectButtonRaihan.addEventListener("click", function () {
  getPlayerName(playerNameRaihan);
  disaledSelectButton("select_buttonRaihan");
  increasePlayerCount()
});

let playerNameMbappe = document.getElementById("playerNameMbappe");
let selectButtonMbappe = document.getElementById("player_select_btn_mbappe");
selectButtonMbappe.addEventListener("click", function () {
  getPlayerName(playerNameMbappe);
  disaledSelectButton("player_select_btn_mbappe");
  increasePlayerCount()
});

let playerNameOzil = document.getElementById("playerNameOzil");
let selectButtonOzil = document.getElementById("player_select_btn_ozil");
selectButtonOzil.addEventListener("click", function () {
  getPlayerName(playerNameOzil);
  disaledSelectButton("player_select_btn_ozil");
  increasePlayerCount()
});

let playerNamePele = document.getElementById("playerNamePele");
let selectButtonPele = document.getElementById("player_select_btn_pele");
selectButtonPele.addEventListener("click", function () {
  getPlayerName(playerNamePele);
  disaledSelectButton("player_select_btn_pele");
  increasePlayerCount()
});

let playerNameDibala = document.getElementById("playerNameDibala");
let selectButtonDibala = document.getElementById("player_select_btn_dibala");
selectButtonDibala.addEventListener("click", function () {
  getPlayerName(playerNameDibala);
  disaledSelectButton("player_select_btn_dibala");
  increasePlayerCount();
  
});

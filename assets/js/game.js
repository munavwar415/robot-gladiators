/*function fight() {
  window.alert("The fight has begun!");
}
//fight();

var playerName = prompt("What is your robot's name?");
console.log(playerName);
console.log("This logs a string, good for leaving yourself a messeage");
console.log(10 + 10);
console.log("Our robot's name is " + playerName);*/

var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      alert(enemyName + " has died!");
      playerMoney = playerMoney + 20;
      break;
    } else {
      alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );
    // check players health
    if (playerHealth <= 0) {
      alert(playerName + " has died!");
      break;
    } else {
      alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};
for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyNames = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyNames);
}

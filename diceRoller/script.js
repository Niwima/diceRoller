document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice(){
    let numberOfDice = Number(document.getElementById("numberOfDice").value);
    let numberOfSides = Number(document.getElementById("numberOfSides").value);
    let modifier = Number(document.getElementById("modifier").value);

    let rolls = []
    for (i = 0; i < numberOfDice; i++) {
        rolls.push(roll());
      };
    let sumOfRolls = rolls.reduce(function(a, b){
        return a + b;
        }, 0)
    let total = sumOfRolls + modifier
    return document.getElementById("result").innerHTML = numberOfDice + "d" + numberOfSides + " (" + rolls + ") + (" + modifier + "), " + "total = " + total;
}

function roll(){
    let numberOfSides = document.getElementById("numberOfSides").value;
    return 1 + Math.floor(Math.random()*numberOfSides)
}
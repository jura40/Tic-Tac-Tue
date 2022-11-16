const inputs = document.querySelectorAll("input");

let winner = false; // Finns det en vinnare? Ja eller nej
let clicks = 0; //Räknar antal tryck

for (let input of inputs) {
  input.addEventListener("click", (evt) => {
    const id = evt.target.id;
    const buttonId = id[1];

    if (clicks % 2 === 0) {
      // Spelet börjar, X börjar sen O
      document.getElementById("b" + `${buttonId}`).value = "X"; 
      document.getElementById("b" + `${buttonId}`).disabled = true; 
      winnerChecker.isWinner("X"); // true eller false
winnerChecker.isWinner("O"); // true eller false
         
    } 
    else {
      document.getElementById("b" + `${buttonId}`).value = "O"; 
      document.getElementById("b" + `${buttonId}`).disabled = true; 
      winnerChecker.isWinner("X"); // true eller false
winnerChecker.isWinner("O"); // true eller false
    }
 
    clicks++;
    if (clicks === 9 && !winner) {
      // Kollar om alla 9 rutor är ifyllda och att ingen har vunnit.
      document.querySelectorAll("input").disabled = true;
      document.getElementById("print").innerHTML = "DRAW"; // Om alla 9 rutor är tryckta och ingen har vunnit skapas en alert att ingen vann.
    }
    /* function checkWinner() {

      let b1 = document.getElementById("b1").value;
      let b2 = document.getElementById("b2").value; 
      let b3 = document.getElementById("b3").value; 
      let b4 = document.getElementById("b4").value; 
      let b5 = document.getElementById("b5").value;
      let b6 = document.getElementById("b6").value;
      let b7 = document.getElementById("b7").value; 
      let b8 = document.getElementById("b8").value;
      let b9 = document.getElementById("b9").value; 

      if 
      (// kolla X
        b1 + b2 + b3 === "XXX" || b4 + b5 + b6 === "XXX" ||
        b7 + b8 + b9 === "XXX" || b1 + b4 + b7 === "XXX" ||
        b2 + b5 + b8 === "XXX" || b3 + b6 + b9 === "XXX" ||
        b3 + b5 + b7 === "XXX" || b1 + b5 + b9 === "XXX" 
        ) 
      {
        document.querySelectorAll("input").disabled = true;
        winner = true; // Ändrar varibalen theWinner till true/ja
        document.getElementById("print").innerHTML = "The winner is X";
      }
       else if 
       ( // kolla Y
        b1 + b2 + b3 === "OOO" || b4 + b5 + b6 === "OOO" ||
        b7 + b8 + b9 === "OOO" || b1 + b4 + b7 === "OOO" ||
        b2 + b5 + b8 === "OOO" || b3 + b6 + b9 === "OOO" ||
        b3 + b5 + b7 === "OOO" || b1 + b5 + b9 === "OOO" 
        )
        {
        document.querySelectorAll("input").disabled = true;
        winner = true; // Ändrar varibalen theWinner till true/ja
        document.getElementById("print").innerHTML = "The winner is O";

      }
      if (clicks === 9 && !winner) {
        // Kollar om alla 9 rutor är ifyllda och att ingen har vunnit.
        document.querySelectorAll("input").disabled = true;
        document.getElementById("print").innerHTML = "DRAW"; // Om alla 9 rutor är tryckta och ingen har vunnit skapas en alert att ingen vann.
      }
    } */
    
  });
}
class WinnerChecker {
  constructor(inputs) { [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    this.inputs = inputs;
  }
  isWinner(sign = "X" || "O") {
    const [b1, b2, b3, b4, b5, b6, b7, b8, b9] = this.inputs;
    const row = sign + sign + sign; // "OOO"

    if (b1.value + b2.value + b3.value === row ||
      b4.value + b5.value + b6.value === row ||
      b7.value + b8.value + b9.value === row ||
      b1.value + b4.value + b7.value === row ||
      b2.value + b5.value + b8.value === row ||
      b3.value + b6.value + b9.value === row ||
      b1.value + b5.value + b9.value === row ||
      b3.value + b5.value + b7.value === row)
      {
        document.getElementById("print").innerHTML = "The winner is  >" + sign + "<  enligt domare Omar och Djura"; // Om alla 9 rutor är tryckta och ingen har vunnit skapas en alert att ingen vann.

      }
    
      

      
  }
  
}

const winnerChecker = new WinnerChecker([
  document.getElementById("b1"),
  document.getElementById("b2"),
  document.getElementById("b3"),
  document.getElementById("b4"),
  document.getElementById("b5"),
  document.getElementById("b6"),
  document.getElementById("b7"),
  document.getElementById("b8"),
  document.getElementById("b9")
])




document.getElementById("but").onclick = function Reset () {
  //En funktion
  clicks = 0; //Reset till noll
  winner = false; //Reset till start

  for (let i = 1; i < 10; i++)
    for (let a = 0; a < 9; a++) {
      document.getElementById("b" + i).disabled = false;
      document.getElementById("print").innerHTML = "";
      const elements = document.querySelectorAll("input"); 
      elements[+a].value = ""; 
    }
};
let tog = 1; // variable used to toggle between the 2 players
let rollingSound = new Audio("./images/rpg-dice-rolling-95182.mp3");
let winSound = new Audio("./images/winharpsichord-39642.mp3");

let p1sum = 0;
let p2sum = 0;

// for loop to render divs for game
for (let i = 1; i <= 100; i++) {
  let board = document.createElement("div");

  board.className = "box";
  board.id = "b" + i;

  if (i === 91) {
    let p1 = document.createElement("p");
    p1.id = "p1";
    board.appendChild(p1);

    let p2 = document.createElement("p");
    p2.id = "p2";
    board.appendChild(p2);
  }
  document.getElementById("board").appendChild(board);
}

const play = (player, psum, correction, num) => {
  let sum;
  if (psum == "p1sum") {
    p1sum = p1sum + num;

    if (p1sum > 100) {
      p1sum = p1sum - num;
    }

    if (p1sum == 1) {
      p1sum = 38;
    }
    if (p1sum == 4) {
      p1sum = 14;
    }
    if (p1sum == 8) {
      p1sum = 30;
    }
    if (p1sum == 21) {
      p1sum = 42;
    }
    if (p1sum == 28) {
      p1sum = 76;
    }
    if (p1sum == 32) {
      p1sum = 10;
    }
    if (p1sum == 36) {
      p1sum = 6;
    }
    if (p1sum == 48) {
      p1sum = 26;
    }
    if (p1sum == 50) {
      p1sum = 67;
    }
    if (p1sum == 62) {
      p1sum = 18;
    }
    if (p1sum == 71) {
      p1sum = 92;
    }
    if (p1sum == 80) {
      p1sum = 99;
    }
    if (p1sum == 88) {
      p1sum = 24;
    }
    if (p1sum == 95) {
      p1sum = 56;
    }
    if (p1sum == 97) {
      p1sum = 78;
    }

    sum = p1sum;
  }

  if (psum == "p2sum") {
    p2sum = p2sum + num;

    if (p2sum > 100) {
      p2sum = p2sum - num;
      // sum = p1sum
    }

    if (p2sum == 1) {
      p2sum = 38;
    }
    if (p2sum == 4) {
      p2sum = 14;
    }
    if (p2sum == 8) {
      p2sum = 30;
    }
    if (p2sum == 21) {
      p2sum = 42;
    }
    if (p2sum == 28) {
      p2sum = 76;
    }
    if (p2sum == 32) {
      p2sum = 10;
    }
    if (p2sum == 36) {
      p2sum = 6;
    }
    if (p2sum == 48) {
      p2sum = 26;
    }
    if (p2sum == 50) {
      p2sum = 67;
    }
    if (p2sum == 62) {
      p2sum = 18;
    }
    if (p2sum == 71) {
      p2sum = 92;
    }
    if (p2sum == 80) {
      p2sum = 99;
    }
    if (p2sum == 88) {
      p2sum = 24;
    }
    if (p2sum == 95) {
      p2sum = 56;
    }
    if (p2sum == 97) {
      p2sum = 78;
    }

    sum = p2sum;
  }

  document.getElementById(`${player}`).style.transition = `linear all .5s`;

  if (sum < 10) {
    document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`;
    document.getElementById(`${player}`).style.top = `${
      -0 * 62 - correction
    }px`;
  } else if (sum == 100) {
    winSound.play();
    if (player == "p1") {
      alert("Red Won !!");
    } else if (player == "p2") {
      alert("Yellow Won !!");
    }
    // location.reload();
  } else {
    numarr = Array.from(String(sum));
    n1 = eval(numarr.shift());
    n2 = eval(numarr.pop());
    // console.log(n1, n2)

    if (n1 % 2 != 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${9 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${
          (9 - (n2 - 1)) * 62
        }px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    } else if (n1 % 2 == 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${0 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    }
  }

  console.log(sum)
}

// const dice = document.querySelector('.dice');
// const rollBtn = document.querySelector('.roll');

// document.getElementById("diceBtn").addEventListener("click", function () {
//   rollingSound.play(); //  plays audio when button is clicked.
//   num = Math.floor(Math.random() * 6 + 1); //generates a number between 1 to 6, like a dice.
//   document.getElementById("dice").innerText = num;

//   if (tog % 2 != 0) {
//     // if returned value is not equal to 0, yellow moves.
//     document.getElementById("tog").innerText = "Yellow's Turn : ";
//     play("p1", "p1sum", 0, num);
//   } else if (tog % 2 == 0) {
//     // if returned value is equal to 0, red moves.
//     document.getElementById("tog").innerText = "Red's Turn : ";

//     play("p2", "p2sum", 55, num);
//   }

//   tog = tog + 1;
// });



// rolling dice code

// const randomDice = () => { 
//   const random = Math.floor(Math.random() * 6 + 1);

//   if (random >= 1 && random <= 6) {
//     rollDice(random);
//   }
//   else {
//     randomDice();
//   }
  
// }

// const rollDice = random => {
//   dice.style.animation = 'rolling 4s';

//   setTimeout(() => {
//     switch (random) {
//       case 1:
//         dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
//         break;
      
//       case 6:
//         dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
//         break;
        
//       case 2:
//         dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
//         break;
      
//       case 5:
//         dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
//         break;
      
//       case 3:
//         dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
//         break;

//       case 4:
//         dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
//         break;

//       default:
//         break;
//     }

//     dice.style.animation = 'none';

//   }, 4050)
// }

// rollBtn.addEventListener('click', randomDice);





// test code

const dice = document.querySelector('.dice');

document.getElementById("diceBtn").addEventListener("click", function () {
  rollingSound.play(); //  plays audio when button is clicked.
  const num = Math.floor(Math.random() * 6 + 1); //generates a number between 1 to 6, like a dice.

  if (tog % 2 != 0) {
    // if returned value is not equal to 0, yellow moves.
    document.getElementById("tog").innerHTML = `<span style="color:yellow;">${"Yellow's Turn : "}</span>`;
    play("p1", "p1sum", 0, num);
  } else if (tog % 2 == 0) {
    // if returned value is equal to 0, red moves.
    document.getElementById("tog").innerHTML = `<span style="color:red;">${"Red's Turn : "}</span>`;
    play("p2", "p2sum", 55, num);
  }

  tog = tog + 1;

  rollDice(num)
});

const rollDice = num => {
  dice.style.animation = 'rolling 2s';

  setTimeout(() => {
    switch (num) {
      case 1:
        dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        break;
      
      case 6:
        dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
        break;
        
      case 2:
        dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        break;
      
      case 5:
        dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
        break;
      
      case 3:
        dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
        break;

      case 4:
        dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        break;

      default:
        break;
    }

    dice.style.animation = 'none';

  }, 500)
}
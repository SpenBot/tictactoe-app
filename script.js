
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const turnDisplay = document.getElementById('turnDisplay')
const boxesDOM = Array.from(document.getElementsByClassName('box'))


let turn = 0
let currentToken = "X"


turnDisplay.innerHTML = `PLAYER TURN : ${currentToken}`

boxesDOM.forEach( box => box.addEventListener('click', boxSelect) )

let playerXCount = []
let playerOCount = []



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function boxSelect () {

  if (this.dataset.clicked == 'true') {
    return
  } else {

  this.innerHTML = currentToken
  this.dataset.clicked = 'true'

  let v = this.dataset.value

  updateScore(v)
  updateTurn()
  }

}



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function updateScore(v) {

  if (currentToken === "X") {
    playerXCount.push(v)
  } else if (currentToken === "O") {
    playerOCount.push(v)
  }

  checkWin()
}



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// function checkWin (pNumArray) {
//   if (pNumArray.includes("0" && "1" && "2")) {
//     alert(`PLAYER ${currentToken} WINS!`)
//   } else if (pNumArray.includes("3" && "4" && "5")) {
//     alert(`PLAYER ${currentToken} WINS!`)
//   } else if (pNumArray.includes("6" && "7" && "8")) {
//     alert(`PLAYER ${currentToken} WINS!`)
//   } else if (pNumArray.includes("0" && "4" && "8")) {
//     alert(`PLAYER ${currentToken} WINS!`)
//   }
// }

// function checkWin () {
//
//
//   if (playerXCount.includes("0" && "1" && "2") ||
//       playerXCount.includes("3" && "4" && "5") ||
//       playerXCount.includes("6" && "7" && "8") ||
//       playerXCount.includes("0" && "4" && "8") ||
//       playerXCount.includes("2" && "4" && "6")) {
//         alert(`PLAYER X WINS!`)
//   }
//
//   if (playerOCount.includes("0" && "1" && "2") ||
//       playerOCount.includes("3" && "4" && "5") ||
//       playerOCount.includes("6" && "7" && "8") ||
//       playerOCount.includes("0" && "4" && "8") ||
//       playerOCount.includes("2" && "4" && "6")) {
//         alert(`PLAYER O WINS!`)
//   }
//
// }


// function checkWin () {
//   if (playerXCount.includes("0" && "1" && "2")) {
//     alert(`PLAYER X WINS!`)
//   } else if (playerXCount.includes("3" && "4" && "5")) {
//     alert(`PLAYER X WINS!`)
//   } else if (playerXCount.includes("6" && "7" && "8")) {
//     alert(`PLAYER X WINS!`)
//   } else if (playerXCount.includes("0" && "4" && "8")) {
//     alert(`PLAYER X WINS!`)
//   }
// }

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function updateTurn () {
  turn++
  turn % 2 === 0 ? currentToken = "X" : currentToken = "O"
  turnDisplay.innerHTML = `PLAYER TURN : ${currentToken}`
}

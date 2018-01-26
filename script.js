
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const turnDisplay = document.getElementById('turnDisplay')
const boxesDOM = Array.from(document.getElementsByClassName('box'))


let turn = 0
let currentToken = "X"


turnDisplay.innerHTML = `PLAYER TURN : ${currentToken}`

boxesDOM.forEach( box => box.addEventListener('click', boxSelect) )




///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


function boxSelect () {

  if (this.dataset.clicked == 'true') {
    return
  } else {

  this.innerHTML = currentToken
  this.dataset.clicked = 'true'

  let x = this.dataset.x
  let y = this.dataset.y

  updateScore(x , y)
  updateTurn()
  }

}


function updateTurn () {
  turn++

  turn % 2 === 0 ? currentToken = "X" : currentToken = "O"

  turnDisplay.innerHTML = `PLAYER TURN : ${currentToken}`
}


function updateScore(x, y) {

  // checkWin()
}


// function checkWin () {
// }

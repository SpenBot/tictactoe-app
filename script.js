
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const turnDisplay = document.getElementById('turnDisplay')
const boxesDOM = Array.from(document.getElementsByClassName('box'))


let turn = 0
let currentToken = "X"


turnDisplay.innerHTML = `PLAYER TURN : ${currentToken}`

boxesDOM.forEach( box => box.addEventListener('click', boxSelect) )


let pXrow0 = 0
let pXrow1 = 0
let pXrow2 = 0
let pXcol0 = 0
let pXcol1 = 0
let pXcol2 = 0
let pXdiagFor = 0
let pXdiagBack = 0


let pOrow0 = 0
let pOrow1 = 0
let pOrow2 = 0
let pOcol0 = 0
let pOcol1 = 0
let pOcol2 = 0
let pOdiagFor = 0
let pOdiagBack = 0


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
    if (v == 0) {
      pXrow0++
      pXcol0++
      pXdiagBack++
    } else if (v == 1) {
      pXrow0++
      pXcol1++
    } else if (v == 2) {
      pXrow0++
      pXcol2++
      pXdiagFor++
    } else if (v == 3) {
      pXrow1++
      pXcol0++
    } else if (v == 4) {
      pXrow1++
      pXcol1++
      pXdiagBack++
      pXdiagFor++
    } else if (v == 5) {
      pXrow1++
      pXcol2++
    } else if (v == 6) {
      pXrow2++
      pXcol0++
      pXdiagFor++
    } else if (v == 7) {
      pXrow2++
      pXcol1++
    } else if (v == 8) {
      pXrow2++
      pXcol2++
      pXdiagBack++
    }
  } else if (currentToken === "O") {
    if (v == 0) {
      pOrow0++
      pOcol0++
      pOdiagBack++
    } else if (v == 1) {
      pOrow0++
      pOcol1++
    } else if (v == 2) {
      pOrow0++
      pOcol2++
      pOdiagFor++
    } else if (v == 3) {
      pOrow1++
      pOcol0++
    } else if (v == 4) {
      pOrow1++
      pOcol1++
      pOdiagBack++
      pOdiagFor++
    } else if (v == 5) {
      pOrow1++
      pOcol2++
    } else if (v == 6) {
      pOrow2++
      pOcol0++
      pOdiagFor++
    } else if (v == 7) {
      pOrow2++
      pOcol1++
    } else if (v == 8) {
      pOrow2++
      pOcol2++
      pOdiagBack++
    }
  }

  checkWin()
}



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function checkWin() {
  if (
    pXrow0 == 3 ||
    pXrow1 == 3 ||
    pXrow2 == 3 ||
    pXcol0 == 3 ||
    pXcol1 == 3 ||
    pXcol2 == 3 ||
    pXdiagFor == 3 ||
    pXdiagBack == 3)
    { setTimeout( ()=> alert("Player X wins!"), 50) }
  else if (
    pOrow0 === 3 ||
    pOrow1 === 3 ||
    pOrow2 === 3 ||
    pOcol0 === 3 ||
    pOcol1 === 3 ||
    pOcol2 === 3 ||
    pOdiagFor === 3 ||
    pOdiagBack === 3)
    { setTimeOut( ()=> alert("Player O wins!"), 50) }
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function updateTurn () {
  turn++
  turn % 2 === 0 ? currentToken = "X" : currentToken = "O"
  turnDisplay.innerHTML = `PLAYER TURN : ${currentToken}`
}

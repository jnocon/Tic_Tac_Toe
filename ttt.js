var prompt = require('prompt')
var board = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
}

var printBoard = function () {
  console.log(
      `
      ${board[1]}  |  ${board[2]}  |  ${board[3]}

      --------------

      ${board[4]}  |  ${board[5]}  |  ${board[6]}

      --------------

      ${board[7]}  |  ${board[8]}  |  ${board[9]}
      
      `
    )
}
var checkForWin = function (player) {
  var winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
  for (var i = 0; i < winCombos.length; i++) {
    var pieceCount = 0
    for (var j = 0; j < winCombos[i].length; j++) {
      if (board[winCombos[i][j]] === player) {
        pieceCount++
      }
      if (pieceCount === 3) {
        return true
      }
    }
  }
  return false
}
var addPiece = function (player) {
  printBoard()
  console.log('your turn player ' + player)
  console.log('you can only replace a number with ' + player)
  console.log('when prompted for position, put in the number you would replace with ' + player)
  prompt.start()
  prompt.get(['position'], function (err, result) {
    board[result.position] = player
    printBoard()
    
    if (checkForWin(player) === true) {
      console.log('player ' + player + ' has won')
      return
    } else {
      if (player === "X") {
        addPiece("O")
      } else {
        addPiece("X")
      }
    }
  })
}
var resetBoard = function () {
  board = {
    a: {
      1: '  ',
      2: '  ',
      3: '  '
    },
    b: {
      1: '  ',
      2: '  ',
      3: '  '
    },
    c: {
      1: '  ',
      2: '  ',
      3: '  '
    }
  }
}

addPiece('X')

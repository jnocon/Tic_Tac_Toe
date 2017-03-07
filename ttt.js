var TTT = () => {
  this.board = {
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

TTT.prototype = {
  printBoard: () => {
    var board = this.board
    console.log(
      `
      ${board.a[1]}|${board.a[2]}|${board.a[3]}

      ---------------

      ${board.b[1]}|${board.b[2]}|${board.b[3]}

      ---------------

      ${board.c[1]}|${board.c[2]}|${board.c[3]}
      
      `
      
    )
  },
  checkForWin: () => {

  },
  addPiece: () => {

  },
  resetBoard: () => {
    this.board = {
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
}


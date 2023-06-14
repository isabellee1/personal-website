// Initialize the game board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  // Define the players
  const player1 = 'X';
  const player2 = 'O';
  
  // Current player
  let currentPlayer = player1;
  
  // Function to check if a player has won
  function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      ) {
        return true;
      }
    }
  
    // Check diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }
  
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }
  
    return false;
  }
  
  // Function to check if the game is a tie
  function checkTie() {
    for (let row of board) {
      if (row.includes('')) {
        return false;
      }
    }
    return true;
  }
  
  // Function to handle a player's move
  function makeMove(row, col) {
    // Check if the position is valid
    if (row < 0 || row > 2 || col < 0 || col > 2 || board[row][col] !== '') {
      console.log('Invalid move!');
      return;
    }
  
    // Set the player's symbol on the board
    board[row][col] = currentPlayer;
  
    // Print the current board
    console.log(board);
  
    // Check if the current player has won
    if (checkWin(currentPlayer)) {
      console.log(`Player ${currentPlayer} wins!`);
      return;
    }
  
    // Check if the game is a tie
    if (checkTie()) {
      console.log('It\'s a tie!');
      return;
    }
  
    // Switch to the next player
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
  
  // Example usage:
  makeMove(0, 0); // Player X moves
  makeMove(1, 1); // Player O moves
  makeMove(0, 1); // Player X moves
  makeMove(1, 2); // Player O moves
  makeMove(0, 2); // Player X wins!
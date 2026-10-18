document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const squares = board.children;
  const status = document.getElementById("status");
  const newGameButton = document.querySelector(".btn");

  // Save the original message so we can restore it on reset
  const originalMessage = status.textContent;

  // Tracks the game: each entry is "", "X", or "O"
  const gameState = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";

  // Every possible winning line (indexes into gameState)
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  // Returns "X" or "O" if someone has won, otherwise null
  function checkWinner() {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (gameState[a] !== "" &&
          gameState[a] === gameState[b] &&
          gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  // Puts everything back to the starting state
  function resetGame() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
      squares[i].classList.remove("X", "O");
      gameState[i] = "";
    }
    status.textContent = originalMessage;
    status.classList.remove("you-won");
    currentPlayer = "X";
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");

    squares[i].addEventListener("click", function () {
      // Ignore clicks on squares that are already taken
      if (gameState[i] !== "") {
        return;
      }

      // Show the mark and style it
      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);

      // Record it in the state array
      gameState[i] = currentPlayer;

      // Check for a winner
      const winner = checkWinner();
      if (winner) {
        status.textContent = "Congratulations! " + winner + " is the Winner!";
        status.classList.add("you-won");
      }

      // Switch turns
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });

    // Highlight when the mouse enters
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("hover");
    });

    // Remove the highlight when the mouse leaves
    squares[i].addEventListener("mouseout", function () {
      squares[i].classList.remove("hover");
    });
  }

  // New Game button
  newGameButton.addEventListener("click", resetGame);
});
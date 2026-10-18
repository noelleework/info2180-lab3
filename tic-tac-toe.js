document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const squares = board.children;

  // Tracks the game: each entry is "", "X", or "O"
  const gameState = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");

    squares[i].addEventListener("click", function () {
      // Show the mark and style it
      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);

      // Record it in the state array
      gameState[i] = currentPlayer;

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
});
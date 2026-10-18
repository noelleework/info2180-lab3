document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const squares = board.children;

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }
});
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
  startGame();
  };
  function startGame() {
      document.querySelector("div").style.display = "none";
      game.init();
  }
};

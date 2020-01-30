window.onload = function() {
  document.getElementById("instruction-btn").onclick = function() {
  instruction();
  };
  document.getElementById("game-start").onclick = function() {
    startGame();
    };
  document.getElementById("restart").onclick = function() {
      startGame();
    };

  function instruction() {
    document.getElementById("game-intro").style.display = "none";
    document.getElementById("instruction").style.display = "flex";
    
  }

  function startGame() {
      document.getElementById("instruction").style.display = "none";
      game.init();
  }
};
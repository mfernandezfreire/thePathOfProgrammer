window.onload = function() {
  document.getElementById("instruction-btn").onclick = function() {
  instruction();
  };

  function instruction() {
    document.getElementById("game-intro").style.display = "none";
    document.getElementById("instruction").style.display = "flex";
  }

  document.getElementById("game-start").onclick = function() {
    startGame();
    };

    function startGame() {
      document.getElementById("instruction").style.display = "none";
      game.init();
  }

  document.getElementById("restart").onclick = function() {
      document.getElementById("game-lose").style.display = "none";
      document.getElementById("game-board").style.display = "flex";
      game.init();
    };

    document.getElementById("next-level").onclick = function() {
      document.getElementById("game-win").style.display = "none";
      document.getElementById("game-board").style.display = "flex";
      game.init2();
    };

 

  
};
function explodeFunction() {
    document.getElementById('explodetext').style.color = "RED"
    document.getElementById('explodetext').textContent = "Du har bombet Rusland"
    document.getElementById('explodegif').style.visibility = "visible"
    var audio = new Audio('bomb.mp3');
    audio.play();
  }

var keypress = require('keypress');
var player = require('play-sound')(opts = {});

 
// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  } else if (!key || !key.name) {
    console.log('undefined');
  } else {
    console.log(key.name);
    mapKeyToSound(key.name);
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();


var mapKeyToSound = function(i) {
  switch(i) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      player.play('wav/kick.wav');
      break;
    case 'space':
      player.play('wav/snare.wav');
      break;
    case 'x':
    case 'n':
    case 'm':
      player.play('wav/phazed.wav');
      break;
    case 'z':
      player.play('wav/air-horn.mp3');
      break;
    default: 
      player.play('wav/tick.wav');
      break;
  }
}
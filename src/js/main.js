window.onload = function () {
  'use strict';

  var game
    , ns = window['pokeballrace'];

  game = new Phaser.Game(750, 600, Phaser.AUTO, 'pokeballrace-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};

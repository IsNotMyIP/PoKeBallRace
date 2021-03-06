(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(x, y, 'Sumo Ball!', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y+50, 'Blue Player: UP, DOWN, LEFT, RIGHT\nPurple Player: W, S, A, D\nPress Enter to Start', {font: '12px minecraftia', align: 'center'});
      this.startTxt.anchor.setTo(0.5, 0.5);

      this.input.onDown.add(this.onDown, this);

    },

    update: function () {
      if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER))
      {
        this.game.state.start('game');
      }
    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['pokeballrace'] = window['pokeballrace'] || {};
  window['pokeballrace'].Menu = Menu;

}());

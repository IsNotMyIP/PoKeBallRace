(function() {
  'use strict';

  function Winner() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Winner.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(x, y, 'The winner is:', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, window.pokeballrace.Global.winner, {font: '12px minecraftia', align: 'center'});
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
  window['pokeballrace'].Winner = Winner;

}());
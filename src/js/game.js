(function() {
  'use strict';

  function Game() {
    this.pokeball1 = null;
    this.pokeball2 = null;
    this.sumo = null;
    this.a = 100;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.sumo = this.add.sprite(x-(500/2)+22, y-(500/2)+27, 'sumo');
      //this.sumo.body.immovable = false;

      this.pokeball1 = this.add.sprite(x, y, 'ball');
      this.pokeball1.anchor.setTo(0.5, 0.5);
      this.pokeball1.body.bounce.setTo(0.9,0.9);
      this.pokeball1.body.setCircle(17.5,17.5,17.5);
      this.pokeball1.body.linearDamping = 0.8;
      ////////////////////////////////////////////////
      this.pokeball2 = this.add.sprite(x, y, 'ball');
      this.pokeball2.anchor.setTo(0.5, 0.5);
      this.pokeball2.body.bounce.setTo(0.9, 0.9);
      this.pokeball2.body.setCircle(17.5,17.5,17.5);
      this.pokeball2.body.linearDamping = 0.8;
      ////////////////////////////////////////////////

      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      var x, y;

      x = this.input.position.x;
      y = this.input.position.y;
      //cx = this.world.centerX;
      //cy = this.world.centerY;
      this.a -= 0.005 * this.time.elapsed;
      //this.sumo.body.setCircle(this.a, this.a, this.a);
      //console.log(this.a);

      this.pokeball1.body.collideWorldBounds = true;
      this.pokeball2.body.collideWorldBounds = true;

      //POKEBOLA NUMERO UNITO
      //LEFTTTTTTTTTTTTIES
      if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
      {
        this.pokeball1.body.velocity.x -= 1.5 * this.time.elapsed;
      }
     //else if (this.pokeball1.body.velocity.x < 0) {
       // this.pokeball1.body.velocity.x += 0.75 * this.time.elapsed;
      //}
      //RAIGT
      if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
      {
        this.pokeball1.body.velocity.x += 1.5 * this.time.elapsed;
      }
      //else if (this.pokeball1.body.velocity.x > 0) {
        //this.pokeball1.body.velocity.x -= 0.75 * this.time.elapsed;
      //}
      //EL BUEN UP
      if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
      {
        this.pokeball1.body.velocity.y -= 1.5 * this.time.elapsed;
      }
      //else if (this.pokeball1.body.velocity.y < 0) {
        //this.pokeball1.body.velocity.y += 0.75 * this.time.elapsed;
      //}
      //EL MAL DAUN
      if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN))
      {
        this.pokeball1.body.velocity.y += 1.5 * this.time.elapsed;
      }
      //else if (this.pokeball1.body.velocity.y > 0) {
        //this.pokeball1.body.velocity.y -= 0.75 * this.time.elapsed;
      //}


      //POKEBOLA NUMERO DOSITO
      //LEFTTTTTTTTTTTTIES
      if (this.input.keyboard.isDown(Phaser.Keyboard.A))
      {
        this.pokeball2.body.velocity.x -= 1.5 * this.time.elapsed;
      }
      //else if (this.pokeball2.body.velocity.x < 0) {
        //this.pokeball2.body.velocity.x += 0.75 * this.time.elapsed;
      //}
      //RAIGT
      if (this.input.keyboard.isDown(Phaser.Keyboard.D))
      {
        this.pokeball2.body.velocity.x += 1.5 * this.time.elapsed;
      }
      //else if (this.pokeball2.body.velocity.x > 0) {
        //this.pokeball2.body.velocity.x -= 0.75 * this.time.elapsed;
      //}
      //EL BUEN UP
      if (this.input.keyboard.isDown(Phaser.Keyboard.W))
      {
        this.pokeball2.body.velocity.y -= 1.5 * this.time.elapsed;
      }
      //else if (this.pokeball2.body.velocity.y < 0) {
        //this.pokeball2.body.velocity.y += 0.75 * this.time.elapsed;
      //}
      //EL MAL DAUN
      if (this.input.keyboard.isDown(Phaser.Keyboard.S))
      {
        this.pokeball2.body.velocity.y += 1.5 * this.time.elapsed;
      }
      //else if (this.pokeball2.body.velocity.y > 0) {
        //this.pokeball2.body.velocity.y -= 0.75 * this.time.elapsed;
      //}

      this.game.physics.collide(this.pokeball1, this.pokeball2);
      
      if(this.distance(this.pokeball1) >= 225) {
        this.game.state.start('menu');
      }
      if(this.distance(this.pokeball2) >= 225) {
        this.game.state.start('menu');
      }


      /*var z = this.distance(this.pokeball1);
      console.log(z);*/

    },

    onInputDown: function () {
      this.game.state.start('menu');
    },

    distance: function (bola) {
      return Math.sqrt((bola.x-this.game.width/2)*(bola.x-this.game.width/2)+(bola.y-this.game.height/2)*(bola.y-this.game.height/2));
    },


  };

  window['pokeballrace'] = window['pokeballrace'] || {};
  window['pokeballrace'].Game = Game;

}());

    

    
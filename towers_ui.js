(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var TowersUI = Hanoi.TowersUI = function (game) {
    this.startPile = null;
    this.endPile = null;
    this.game = game;
    this.setClickHandler();
  }

  TowersUI.prototype.setClickHandler = function () {
    var that = this;
    $('.pile').on('click', function(event){
      var $currentPile = $(event.currentTarget);
      if (that.startPile) {
        that.endPile = parseInt($currentPile.attr("data-id"));
        that.game.takeTurn(that.startPile-1, that.endPile-1);
      } else {
        that.startPile = parseInt($currentPile.attr("data-id"));
        console.log("clicked on pile " + that.startPile);
      }
    });
  }

  TowersUI.prototype.render = function () {
    //build Dom
    //display game
  }
})(this);

// var TowersUI = new this.Hanoi.TowersUI();

$(function () {
  var Game = new Hanoi.Game();
  // TowersUI.setClickHandler();
  var TowersUI = new Hanoi.TowersUI(Game);
});


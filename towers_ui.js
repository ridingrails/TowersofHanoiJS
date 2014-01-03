(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var TowersUI = Hanoi.TowersUI = function (game) {
    this.$startPile = null;
    this.$endPile = null;
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
        that.$startPile.removeClass('highlighted');
        that.$endPile = $currentPile
        that.endPile = parseInt($currentPile.attr("data-id"));
        if (that.game.takeTurn(that.startPile-1, that.endPile-1)) {
          that.$endPile.prepend(that.$startPile.find(':first-child'));
        }
        that.$startPile = null;
        that.startPile = null;
        that.$endPile = null;
        that.endPile = null;
      } else {
        that.$startPile = $currentPile;
        that.$startPile.addClass('highlighted');
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


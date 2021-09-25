// import * as PIXI from "pixi.js";
var width = 500;
var height = 500;
var app = new PIXI.Application({
    width: width,
    height: height,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0xeeeeee
});
document.body.appendChild(app.view);
var stage = app.stage;
// Player Class
var Player = /** @class */ (function () {
    function Player() {
        this._playerRectangle = new PIXI.Graphics();
        this._keys = {};
    }
    // constructor(player: PIXI.Graphics, keys: object) {
    //   this._playerRectangle = player;
    //   this._keys = keys;
    // }
    Player.prototype.createPlayer = function () {
        this._playerRectangle.lineStyle(5, 0x000000);
        this._playerRectangle.beginFill(0x000eee);
        this._playerRectangle.drawRect(0, 0, 40, 40);
        this._playerRectangle.x = app.view.width / 2 - 20;
        this._playerRectangle.y = app.view.height / 2 - 20;
        stage.addChild(this._playerRectangle);
    };
    Player.prototype.movePlayer = function () {
        var _this = this;
        var keysDown = function (e) {
            _this._keys[e.keyCode] = true;
        };
        var keysUp = function (e) {
            _this._keys[e.keyCode] = false;
        };
        window.addEventListener("keydown", keysDown);
        window.addEventListener("keyup", keysUp);
        var speed = 5;
        var arrowsInteraction = function () {
            if (_this._keys[37] && _this._playerRectangle.x > 5) {
                _this._playerRectangle.x -= speed;
            }
            if (_this._keys[39] && _this._playerRectangle.x < width - 45) {
                _this._playerRectangle.x += speed;
            }
            if (_this._keys[38] && _this._playerRectangle.y > 5) {
                _this._playerRectangle.y -= speed;
            }
            if (_this._keys[40] && _this._playerRectangle.y < height - 45) {
                _this._playerRectangle.y += speed;
            }
        };
        app.ticker.add(arrowsInteraction);
    };
    return Player;
}());
var playerOne = new Player();
playerOne.createPlayer();
playerOne.movePlayer();

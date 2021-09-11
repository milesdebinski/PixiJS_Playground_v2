// import * as PIXI from "pixi.js";
var app = new PIXI.Application({
    width: 500,
    height: 500,
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
            console.log(typeof _this._keys[e.keyCode]);
        };
        var keysUp = function (e) {
            _this._keys[e.keyCode] = false;
        };
        window.addEventListener("keydown", keysDown);
        window.addEventListener("keyup", keysUp);
        var speed = 5;
        var arrowsInteraction = function () {
            if (_this._keys[37]) {
                _this._playerRectangle.x -= speed;
            }
            if (_this._keys[39]) {
                _this._playerRectangle.x += speed;
            }
            if (_this._keys[38]) {
                _this._playerRectangle.y -= speed;
            }
            if (_this._keys[40]) {
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

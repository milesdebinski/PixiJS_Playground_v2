// import * as PIXI from "pixi.js";
const width = 500;
const height = 500;

const app = new PIXI.Application({
  width: width,
  height: height,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xeeeeee,
});
document.body.appendChild(app.view);
const stage = app.stage;

// Player Class
class Player {
  private _playerRectangle: PIXI.Graphics = new PIXI.Graphics();
  private _keys: object = {};

  // constructor(player: PIXI.Graphics, keys: object) {
  //   this._playerRectangle = player;
  //   this._keys = keys;
  // }

  public createPlayer(): void {
    this._playerRectangle.lineStyle(5, 0x000000);
    this._playerRectangle.beginFill(0x000eee);
    this._playerRectangle.drawRect(0, 0, 40, 40);
    this._playerRectangle.x = app.view.width / 2 - 20;
    this._playerRectangle.y = app.view.height / 2 - 20;

    stage.addChild(this._playerRectangle);
  }

  public movePlayer(): void {
    const keysDown = (e) => {
      this._keys[e.keyCode] = true;
    };
    const keysUp = (e) => {
      this._keys[e.keyCode] = false;
    };
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);
    const speed = 5;
    const arrowsInteraction = () => {
      if (this._keys[37] && this._playerRectangle.x > 5) {
        this._playerRectangle.x -= speed;
      }
      if (this._keys[39] && this._playerRectangle.x < width - 45) {
        this._playerRectangle.x += speed;
      }
      if (this._keys[38] && this._playerRectangle.y > 5) {
        this._playerRectangle.y -= speed;
      }
      if (this._keys[40] && this._playerRectangle.y < height - 45) {
        this._playerRectangle.y += speed;
      }
    };
    app.ticker.add(arrowsInteraction);
  }
}

const playerOne = new Player();
playerOne.createPlayer();
playerOne.movePlayer();

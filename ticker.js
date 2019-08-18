// aliases
let Application = PIXI.Application,
  loader = PIXI.loader,
  Rectangle = PIXI.Rectangle,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite;

let app, state;

function initApp() {
  app = new Application({
    width: 128,
    height: 128,
    antialias: true,
    transparent: false,
    resolution: 4
  });

  // make canvas fill entire window
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";

  document.body.appendChild(app.view);

  load();
}

function load() {
  loader.add("images/male_data.json").load(setup);
}

let male1, male2, male3, id;

function _positionSpritesHorizontally(leftSprite, rightSprite) {
  rightSprite.x = leftSprite.x + leftSprite.width;
}

function setup() {
  keyboardManager = new KeyboardManager();

  let male1Texture = TextureCache["male1.png"];
  male1 = new Sprite(male1Texture);
  male1.keyboardManager = new KeyboardManager();
  app.stage.addChild(male1);

  window.addEventListener("keydown", male1.keyboardManager.downListener, false);
  window.addEventListener("keyup", male1.keyboardManager.upListener, false);

  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  console.log("vx", male1.keyboardManager.vx);
  male1.x += male1.keyboardManager.vx;
  male1.y += male1.keyboardManager.vy;
}

initApp();

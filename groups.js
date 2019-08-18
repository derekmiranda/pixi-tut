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
  id = loader.resources["images/male_data.json"].textures;
  male1 = new Sprite(id["male1.png"]);
  male2 = new Sprite(id["male2.png"]);
  male3 = new Sprite(id["male3.png"]);

  male2.position.set(16, 16);
  male3.position.set(32, 32);

  const males = new PIXI.Container();
  males.addChild(male1);
  males.addChild(male2);
  males.addChild(male3);
  males.position.set(10, 10);

  app.stage.addChild(males);
}

function gameLoop(delta) {
  male1.x += male1.keyboardManager.vx;
  male1.y += male1.keyboardManager.vy;
}

initApp();

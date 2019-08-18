// aliases
let Application = PIXI.Application,
  loader = PIXI.loader,
  Rectangle = PIXI.Rectangle,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite;

let app;

function initApp() {
  app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 4
  });

  // auto-resize
  app.renderer.autoResize = true;

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
  // 3 ways to make sprites from texture atlas frames

  // 1. Access TextureCache directly
  let male1Texture = TextureCache["male1.png"];
  male1 = new Sprite(male1Texture);
  app.stage.addChild(male1);

  // 2. Access texture using loader's resources
  male2 = new Sprite(resources["images/male_data.json"].textures["male2.png"]);
  _positionSpritesHorizontally(male1, male2);
  app.stage.addChild(male2);

  // 3. Create optional alias for all texture atlas frame id textures
  id = PIXI.loader.resources["images/male_data.json"].textures;
  male3 = new Sprite(id["male3.png"]);
  _positionSpritesHorizontally(male2, male3);
  app.stage.addChild(male3);
}

initApp();

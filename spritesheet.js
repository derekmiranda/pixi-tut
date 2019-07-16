// aliases
let Application = PIXI.Application,
  loader = PIXI.loader,
  Rectangle = PIXI.Rectangle,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite;

let app = new Application({
  width: 256,
  height: 256,
  antialias: true,
  transparent: false,
  resolution: 1
});

function initApp() {
  // auto-resize
  app.renderer.autoResize = true;

  // make canvas fill entire window
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.resize(window.innerWidth, window.innerHeight);

  document.body.appendChild(app.view);

  load();
}

// this function loads images into the texture cache
function load() {
  loader.add("images/tileset.png").load(setup);
}

function setup() {
  let texture = TextureCache['images/tileset.png']

  // define position and size of sub-image frame in tilset
  let rectangle = new Rectangle(192, 128, 64, 64);
  texture.frame = rectangle

  let rocket = new Sprite(texture)

  rocket.x = 60
  rocket.y = 60

  app.stage.addChild(rocket)
  app.renderer.render(app.stage)
}

initApp();

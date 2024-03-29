// aliases
let Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
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
  loader.add("images/pixelme.png").load(setup);
}

function setup() {
  let sprite = new Sprite(loader.resources["images/pixelme.png"].texture);

  sprite.anchor.x = 0.5
  sprite.anchor.y = 0.5

  sprite.x = 200
  sprite.y = 200

  // sprite.width = 300
  // sprite.height = 100

  // sprite.scale.x = 2
  // sprite.scale.y = 0.5

  sprite.scale.set(2, 0.5)

  sprite.rotation = Math.PI / 2

  // add sprite to stage
  app.stage.addChild(sprite);

  // to remove sprite
  // app.stage.removeChild(sprite)
  // OR
  // sprite.visible = false
}

initApp();

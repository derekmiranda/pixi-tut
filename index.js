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

  // add sprite to stage
  app.stage.addChild(sprite);

  // to remove sprite
  // app.stage.removeChild(sprite)
  // OR
  // sprite.visible = false
}

initApp();

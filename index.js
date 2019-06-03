let app = new PIXI.Application({ width: 256, height: 256 });

// auto-resize
app.renderer.autoResize = true;

// make canvas fill entire window
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);

var PIXI = require("pixi.js");
var { scaleToWindow } = require("./utils.js");

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

//Create a Pixi Application
let app = new PIXI.Application({
  width: 800,
  height: 600,
  antialias: true,
  transparent: false,
  resolution: 1
});

// set window
app.renderer.backgroundColor = 0x000000;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

// listens for resize events
window.addEventListener("resize", function(event) {
  scaleToWindow(app.renderer.view);
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

PIXI.loader.add("assets/test_sprite.png").load(setup);

function setup() {
  let sprite = new PIXI.Sprite(PIXI.loader.resources["assets/test_sprite.png"].texture);

  app.stage.addChild(sprite);
}

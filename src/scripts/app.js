
var PIXI = require('pixi.js');

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

//Create a Pixi Application
let app = new PIXI.Application({ width: 800, height: 600 });
app.renderer.backgroundColor = 0x061639;
app.renderer.autoResize = true;

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

PIXI.loader
  .add("assets/test.png")
  .load(setup);

function setup() {
  let sprite = new PIXI.Sprite(
    PIXI.loader.resources["assets/test.png"].texture
  );
  
  app.stage.addChild(sprite);
}



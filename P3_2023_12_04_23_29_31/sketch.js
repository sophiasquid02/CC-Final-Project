let data = "assets/list.csv";
let list;

let givePrompt;

let ran;
let ran2;
let ran3;
let ran4;
let ran5;

let title;
let title2;
let title3;
let title4;
let title5;

let canvas;
let imgSave;
let imgReset;
let button;
let bgColor = 245;
let lineColor = 5;
let lineWeight = 1;
let slider;

let slideColor;

let slRed;
let slGreen;
let slBlue;

function preload() {
  list = loadTable("Assets/list.csv", "csv", "header");
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("sketch-holder");

  background(bgColor);
  stroke(lineColor);
  strokeWeight(lineWeight);

  myPrompt = new prompt();
  myPrompt.givePrompt();

  //buttons

  imgSave = createButton("Save Image");
  imgSave.parent("save-button");
  imgSave.mousePressed(saveImage);

  imgReset = createButton("Reset Image");
  imgReset.parent("reset-button");
  imgReset.mousePressed(reset);

  //sliders
  //red
  (slider = createSlider(0, 255, 100)), slider.parent("color-slider");
  slider.style("width", "100px");
  slRed = slider.value();
  //green
  (slider2 = createSlider(0, 255, 100)), slider2.parent("color-slider2");
  slider2.style("width", "100px");
  slGreen = slider2.value();
  //blue
  (slider3 = createSlider(0, 255, 100)), slider3.parent("color-slider3");
  slider3.style("width", "100px");
  slBlue = slider3.value();

  slider4 = createSlider(0, 50, 5);
  slider4.parent("size-slider");
  slider4.style("width", "100px");
  lineWeight = slider4.value();
}

function draw() {
  if (mouseIsPressed) {
    stroke(lineColor);
    lineWeight = slider4.value();
    strokeWeight(lineWeight);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  slRed = slider.value();
  slGreen = slider2.value();
  slBlue = slider3.value();
  lineColor = color(slRed, slGreen, slBlue);
}

function saveImage() {
  saveCanvas(canvas, "promptDrawing", "png");
}

function reset() {
  background(bgColor);
}

class prompt {
  givePrompt() {
    ran = int(random(list.getColumnCount()));
    ran2 = int(random(list.getColumnCount()));
    ran3 = int(random(list.getColumnCount()));
    ran4 = int(random(list.getColumnCount()));
    ran5 = int(random(list.getColumnCount()));

    title = list.get(ran, "object");
    title2 = list.get(ran2, "being");
    title3 = list.get(ran3, "feeling");
    title4 = list.get(ran4, "environment");
    title5 = list.get(ran5, "clothing");

    rect(50, 50, 700, 125);
    textAlign(CENTER);
    textSize(20);
    text(title, 350, 100, 100, 100);
    text(title2, 220, 100, 100, 100);
    text(title3, 100, 100, 100, 100);
    text(title4, 470, 100, 100, 100);
    text(title5, 600, 100, 100, 100);
  }
}

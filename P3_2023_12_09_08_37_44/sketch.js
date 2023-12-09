let data = "assets/list.csv";
let list;
let myFont;

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
let lineColor = 245;
let lineWeight = 1;
let slider;

let slideColor;
let myDiv;

let slRed;
let slGreen;
let slBlue;

function preload() {
  list = loadTable("Assets/list.csv", "csv", "header");
  myFont = loadFont("Assets/Caveat-VariableFont_wght.ttf");
}

function setup() {
  let canvas = createCanvas(800, 550);
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
//shows color
  myDiv = createDiv();
  myDiv.parent("color-set");
  myDiv.style('width', '100%');
  myDiv.style('height', '100%');
  slideColor = color(slRed, slGreen, slBlue);
  background(lineColor);
// line size
  slider4 = createSlider(0, 50, 5);
  slider4.parent("size-slider");
  slider4.style("width", "250px");
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
  myDiv.style('background-color', lineColor);

}

function saveImage() {
  saveCanvas(canvas, "promptDrawing", "png");
}

function reset() {
  background(bgColor);
  myPrompt.givePrompt();
}

class prompt {
  givePrompt() {

    background(bgColor);
    
    ran = int(random(1, list.getColumnCount()));
    ran2 = int(random(1, list.getColumnCount()));
    ran3 = int(random(1, list.getColumnCount()));
    ran4 = int(random(1, list.getColumnCount()));
    ran5 = int(random(1, list.getColumnCount()));

    title = list.get(ran, "object");
    title2 = list.get(ran2, "being");
    title3 = list.get(ran3, "feeling");
    title4 = list.get(ran4, "environment");
    title5 = list.get(ran5, "clothing");
   
    noStroke(0);
    fill(245);
    rect(50, 20, 700, 100);
    textAlign(CENTER);
    textFont(myFont);
    fill(5);
    textSize(20);
    text(title3, 1, 50, 320, 100);
    text(title2, 45, 50, 430, 100);
    text(title, 95, 50, 550, 100);
    text(title4, 190, 50, 600, 100);
    text(title5, 285, 50, 680, 100);
  }
}

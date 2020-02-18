
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/V2gbIIO_/model.json';

let video;
let flippedVideo;
let label = "";

let startGame = false;
let canvas;
let subway;
let introductionText;
let seat;
let instruction;
let parrot;
let facebook;
let sadend;
let insta1;
let insta2;
let insta3;

var w = 640,
    h = 480;

function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
  subway = loadImage("subway.jpeg");
  parrot = loadImage("parrot.gif");
  facebook = loadImage("fb.gif");
  insta1 = loadImage("insta1.jpg");
  insta2 = loadImage("insta2.jpg");
  insta3 = loadImage("insta3.jpg");

}

function setup() {
  startGame = false;
  createCanvas(windowWidth,windowHeight);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  classifyVideo();

 introduction = createP("Welcome to the CTA!");
 introduction.position(10, 300);
 seatButton = createButton('Get Seated');
 seatButton.position(400, 300);
 seatButton.mousePressed(gameStart);
}

function gameStart(){
  startGame = true;
  seatButton.hide();
  // subway.hide();
  introduction.hide();
  instructionText = createP("Stare out the window or pick up your phone");
  instructionText.position(0, 300);
}

function draw() {
  background(112,128,144);
  if(startGame == false){
    image(subway,0,0,400,300);
}

  if(startGame == true){
  // Draw the video
  image(flippedVideo, 0, 0);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  };

  if (label == "with phone" && gameStart){
    image(facebook, 0, 300);
    image(insta1,20,310,150,150);
    image(insta2,320,400,200,300);
    image(insta3,0,530,120,200);
    sadend = createP("too bad you're stuck on a train");
    sadend.position (10, 700);
}}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}

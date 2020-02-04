
let startGame = false;
let phoneBackground;
let phoneBackground2;
let finger;
let endGame1 = false;
let warning;
let boss;
let endGame2 = false;
let bomb;
let epilogueText;
let line2Text;

function preload(){
  finger = loadImage("finger.png");
  phoneBackground = loadImage("background.png");
  phoneBackground2 = loadImage("background2.jpg");
  boss = loadImage("boss.png");
  bomb = loadImage("bomb.gif");
  // warning = createP("YOU ARE A HORRIBLE EMPLOYEE");
  // warning.hide();

}

function setup(){
  noCursor();
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);
  canvas.mousePressed(start);
  }

function start(){
    startGame = true;
  }

function stickyCursor(){
    endGame1 = false;
    frameRate(150);
    background(125, 94, 99);
    image(phoneBackground2,0,0, 414, 735);

    let cursorX = 100+10*(mouseX - pmouseX);
    let cursorY = 100+10*(mouseY - pmouseY);
    image(finger, cursorX, cursorY, 50, 50);

    if (startGame == true && mouseIsPressed && cursorY < 150){
      endGame1 = true;
    }
    if (startGame == true && mouseIsPressed && cursorY > 360 ){
        endGame1 = true;
    }
    if (mouseIsPressed && cursorY > 150 && cursorY < 360){
        endGame2 = true;
    }

  }
//
//
// function end(){
//   endGame1 = true;
// }

function endscreen1(){
  background(255,0,0);
  image(boss,0,0, windowWidth, windowHeight);
}

function endscreen2(){
  background(0);
  image(bomb,0, 0, windowWidth, windowHeight);
  epilogueText = createP("Congratulations! You are a productive member of society!");
  epilogueText.position(windowWidth/3,200);
  line2Text = createP("You perform your duty as a tax-payer!");
  line2Text.position(windowWidth/3,250);
  line3Text = createP("You ignore your duty as a citizen!");
  line3Text.position(windowWidth/3,300);
  line4Text = createP("You will miss out on tonight's dinner!");
  line4Text.position(windowWidth/3,350);
  line5Text = createP("You will be forever alone!!");
  line5Text.position(windowWidth/3,400);
}

function draw(){
  background(255,255,255);
    if (startGame == false){
      image(phoneBackground, 0,0, 414, 735);
      image(finger, mouseX, mouseY, 50, 50);
    } else if(startGame == true){
      stickyCursor();
    }

    if(endGame1 == true){
      endscreen1();
    }

    if (endGame2 == true){
      endscreen2();
    }
}

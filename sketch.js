/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new chick (width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class chick{
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    
    //body
    this.xB = 0;
    this.yB = 0;
    this.widthB = 80;
    this.heightB = 50;
    this.xM1 = -65;
    this.yM1 = 0;
    this.xM2 = -35;
    this.yM2 = -10;
    this.xM3 = -35;
    this.yM3 = +10;

    //leg
    this.xL1 = -10;
    this.yL1 = 20;
    this.xL2 = -10;
    this.yL2 = 50;
    this.xL3 = 10;
    this.yL3 = 20;
    this.xL4 = 10;
    this.yL4 = 50;

    //eyes
    this.eyeX = -10;
    this.eyeY = -5;

    //colorful
     this.m = 0;
     this.n = 0;
     this.r = 0;
     this.g = 0;
     this.b = 0;

  }
  update() {
    //body
    this.yB = 0+ sin(frameCount*0.3)*10;
    this.widthB = 100 + cos(frameCount * 0.6) * 10;
    this.heightB = 60 + sin(frameCount*0.3) * 10;
    this.yM1 = sin(frameCount*0.3) * 10;
    this.xM2 = -33 + cos(frameCount*0.3) * 5;
    this.yM2 = -10 + sin(frameCount*0.3) * 5;
    this.xM3 = -35 + cos(frameCount*0.3) * 5;
    this.yM3 = +10 + sin(frameCount*0.3) * 10;

    //leg
    this.yL2 = 50 - sin(frameCount*0.3) * 5;
    this.yL4 = 50 - sin(frameCount*0.3 + PI) * 5;

    //eyes
    this.eyeX = -10 + cos(frameCount*0.3);
    this.eyeY = -5 + sin(frameCount*0.3)*5;

    //colorful
    this.m = random(-80, 80);
    this.n = random(-80, 80);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    //leg
    stroke(255);
    strokeWeight(2);
    line(this.xL1, this.yL1, this.xL2, this.yL2);
    line(this.xL3, this.yL3, this.xL4, this.yL4);

    //body
    noStroke();
    fill(250, 200, 50);
    ellipse(this.xB, this.yB, this.widthB, this.heightB);
    fill(180, 100, 255);
    triangle(this.xM1, this.yM1, this.xM2, this.yM2, this.xM3, this.yM3);

    //eyes
    fill(0);
    stroke(255);
    strokeWeight(0.5);
    circle(this.eyeX, this.eyeY, 10);

    //colorful
    fill(this.r, this.g, this.b);
    circle(this.m, this.n, 5);

    //stage
    fill(this.r, this.g, this.b,150);
    ellipse(0,55,80,10);



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/
let palacinke = [];
let rolovane = [];
let strasne = [];
let rotacija = 0;
let br = 0;
let boja = 0;
let activeKey= null; //trenutno aktivni taster da mi ne baguje onk

function preload() {
  for (let i = 0; i < 12; i++) { 
    palacinke[i] = loadImage(`palacinke/${i+1}.png`);
  }
  for (let i = 0; i < 6; i++) { 
    rolovane[i] = loadImage(`palacinke/rolovane/rol${i+1}.png`);
  }
  for (let i = 0; i < 6; i++) { 
    strasne[i] = loadImage(`palacinke/jumpscare/j${i+1}.png`);
  }
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  imageMode(CENTER);
  frameRate(20);
}

function draw() {
  if (activeKey === 'a') {
    background(0, 20);
    rotacija = 0;
    let br = floor(random(12));
    image(palacinke[br], displayWidth/2, displayHeight/2, random(300,600), random(300,600));
  }
  
  if (activeKey === 's') {
    background(255, 80);
    rotacija += 20;
    if (rotacija > 180) {
      rotacija -= 360;
      if (br < 5) br++;
      else br = 0;
    }
    translate(displayWidth/2, displayHeight/2);
    rotate(rotacija);
    image(rolovane[br], 0, 0, 500, 500);
  }

  if (activeKey === 'd') {
    if (boja) {
      background(57,255,20);
      boja = false;
    } else {
      background(0);
      boja = true;
    }

    rotacija = 0;
    let br = floor(random(6));
    let br2 = floor(random(2));
    if (br2 == 0) 
      image(strasne[br], displayWidth/2, displayHeight/2, random(130,300), random(550,900));
    else
      image(strasne[br], random(displayWidth/2-250,displayWidth/2+250), random(displayHeight/2-250,displayHeight/2+250), random(550,900), random(130,300));
  }
}

function keyPressed() {
  if (key==='a' || key==='s' || key==='d') {
    activeKey = key;
  }
}
function keyReleased() {
  if (key=== activeKey) {
    activeKey= null;
  }
}

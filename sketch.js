let palacinke=[]
let rolovane=[]
let strasne=[]
let rotacija=0;
let br=0;
let boja=0;
function preload() {
  for (let i = 0; i < 12; i++) { 
    palacinke[i] = loadImage(`palacinke/${i+1}.png`, 
    () => console.log(`Loaded ${i+1}.png`),
    () => console.error(`Error loading ${i+1}.png`)
);

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
  if(keyIsPressed){

    
  if(key == 'a'){
  background(0,20);
  rotacija=0;
  let br=floor(random(12));
  image(palacinke[br],displayWidth/2,displayHeight/2, random(300,600), random(300,600));
}
if(key == 's'){
  background(255,150);
  rotacija+=20;
  if(rotacija>180){
    rotacija=rotacija-360;
    if(br<5)
      br++;
    else
      br=0;}
  // let br=floor(random(6));
  translate(displayWidth/2,displayHeight/2)
  rotate(rotacija)

  // image(rolovane[0],windowWidth/2,windowHeight/2, random(100,700), random(100,700));
  image(rolovane[br], 0, 0,500,500);
}
if(key == 'd'){
  if(boja){
    background(57,255,20);
    boja=false;
  }
  else{
    background(0);
    boja=true;
  }

  rotacija=0;
  let br=floor(random(6));
  let br2=floor(random(2));
  if(br2==0) 
    image(strasne[br],displayWidth/2,displayHeight/2, random(130,300), random(550,900));
  else
    image(strasne[br],random(displayWidth/2-250,displayWidth/2+250),random(displayHeight/2-250,displayHeight/2+250), random(550,900), random(130,300));
  
}
}
}
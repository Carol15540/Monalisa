function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background('rgb(171,119,171)');
  fill('rgb(163,163,251)');
  stroke(100);
  strokeWeight(4);
  circle(200,200,300); // rosto
  fill('white');
  stroke('#0B0700');
  strokeWeight(3);
  circle(150,150,60); // olho esquerdo
  circle(250,150,60); // olho direito
  stroke('rgb(13,0,0)');
  strokeWeight(3);
  line(150,270,250,235); // boca
  fill('rgb(66,66,222)');
  stroke('#0B0102');
  strokeWeight(3);
  triangle(215,189,136,220,220,220); // nariz
  strokeWeight(3);
  line(123,115,178,113); // sobrancelha esquerda
  line(225,116,279,106); // sobrancelha direita
  stroke(0);
  strokeWeight(1);
  //circle(142,150,10); // pupila esquerda
  //circle(242,150,10); // pupila direita
  
  olhoX = map(mouseX,0,400,130,155);
  olhoY = map(mouseY,0,400,130,160);
  
  circle(olhoX,olhoY,10); // nova pupila esquerda;
  circle(olhoX+100,olhoY,10); //nova pupila direita;
  if(mouseIsPressed){
     console.log(mouseX,mouseY);
     }
}       

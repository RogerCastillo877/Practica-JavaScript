var x = 100;
var y = 100;

function setup() {
  createCanvas(800,500);
}

function draw() {
  clear();
  ellipse(x, height/2, 120, 120);
  x++;
}

// /* Funciones */
// var x = 200;
// var y = 200;
// var img;  

// function setup() {
//   createCanvas(800,500);
//   stroke("#666666"); 
//   fill("#4FBDF2");
//   img = loadImage("/img/logo_tosko.png"); 
// }

// function draw() {
//   background("#4AF2A1");
//   //clear();
  
//   //rect(50,50,75,100);
//   rect(x/2,y/2,75,100);
//   //ellipse(250, 150, 80, 80);
//   ellipse(x, y, 80, 80);

//   x++;
//   y++;
  
//   triangle(230, 275, 258, 220, 286, 275);

//   //image(img, 350, 200, 100, 100);
//   image(img, x, 200, 100);
  
// }

// /* Eventos */
// var x = 100;
// var y = 100;
// var img;  

// function setup() {
//   createCanvas(800,500);
//   stroke("#666666"); 
//   fill("#4FBDF2");
//   img = loadImage("/img/logo_tosko.png"); 
// }

// function draw() {
//   background("#4AF2A1");

//   //ellipse(400, 250, 200, 200);  
//   ellipse(x, y, 200, 200);  
//   //ellipse(mouseX, mouseY, 200, 200)
//   //image(img,mouseX, mouseY);
//   mousePresionado();  
    
//   moveCircle()
    
// }

// function mousePresionado(){
//   if (mouseIsPressed) {
//       fill("#1B354B");
//     } else {
//       fill("#F6D030");  
//     }
// }

// function moveCircle(){
// 	if (keyIsDown(LEFT_ARROW))
// 	    x-=5;

// 	  if (keyIsDown(RIGHT_ARROW))
// 	    x+=5;

// 	  if (keyIsDown(UP_ARROW))
// 	    y-=5;

// 	  if (keyIsDown(DOWN_ARROW))
// 	    y+=5;
// }

// /* Librerias */
// var x = 100;
// var y = 100;
// var button;

// function preload() {
//   mySound = loadSound('../audio/drop_coins.mp3');
// }

// function setup() {
//   createCanvas(800,500);
//   stroke("#666666"); 
//   fill("#4FBDF2");
  
//   button = createButton('Detener');
//   button.position(20, 20);
//   button.mousePressed(cambiarFondo); 

//   buttonPlay = createButton('Reproducir');
//   buttonPlay.position(20, 50);
//   buttonPlay.mousePressed(reproducir); 

//   buttonPlay = createButton('Reproducir audio');
//   buttonPlay.position(20, 80);
//   buttonPlay.mousePressed(reproducirAudio); 
// }

// function draw() {
//   button.position(x, y);
//   x++;
// }

// function cambiarFondo() {
//   var r = random(255);
//   var g = random(255);
//   var b = random(255);

//   background(r,g,b);
//   noLoop();
// }

// function reproducir(){
//   loop();
// }

// function reproducirAudio(){
//   mySound.play();
// }
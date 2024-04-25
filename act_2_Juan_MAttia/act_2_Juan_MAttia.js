let circleX, circleY, circleVX, circleVY;
let squareX, squareY;
let circleSize = 40;
const squareSize = 60;
let circleColor;

function setup() {
  createCanvas(700, 600);
  circleX = random(circleSize, width - circleSize);
  circleY = random(circleSize, height - circleSize);
  circleVX = random(-5, 5);
  circleVY = random(-5, 5);
  circleColor = color(0, 0, 255); // circulo azul al pricipio 
}

function draw() {
  background(220);

  // Dibujamos el círculo
  fill(circleColor);
  ellipse(circleX, circleY, circleSize, circleSize);

  // Esto hace que mueva el curculo por el cuadro
  circleX += circleVX;
  circleY += circleVY;

  // Detectar la colisión con el cuadrado
  squareX = mouseX;
  squareY = mouseY;
  if (
    !mouseIsPressed &&
    circleX + circleSize / 2 > squareX &&
    circleX - circleSize / 2 < squareX + squareSize &&
    circleY + circleSize / 2 > squareY &&
    circleY - circleSize / 2 < squareY + squareSize
  ) {
    // Cambiar el color del círculo
    circleColor = color(random(255), random(255), random(255));

    // Invertir las velocidades del círculo para rebotar
    circleVX = -circleVX;
    circleVY = -circleVY;

    // Detectar si colisiona con la cara inferior del cuadrado
    if (circleY > squareY + squareSize / 2) {
      circleSize -= 4; // Disminuir el diámetro del círculo
    }
  }

  // Esto hace que Rebote del círculo en los bordes
  if (circleX < circleSize / 2 || circleX > width - circleSize / 2) {
    circleVX = -circleVX;
  }
  if (circleY < circleSize / 2) {
    circleVY = -circleVY;
    circleSize += 4; // Aumentar el tamaño del círculo
  } else if (circleY > height - circleSize / 2) {
    circleVY = -circleVY;
  }

  //Dibujamos el cuadrado verde
  fill(0, 255, 0);
  rect(squareX, squareY, squareSize, squareSize);
}

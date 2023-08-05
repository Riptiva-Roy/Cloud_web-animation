noStroke();
var leftX = 150;
var rightX = 200;
var sunRadius = 100;

function setup() {
    createCanvas(400, 200);
    frameRate(60);
    animate();
}

function draw() {
    background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX + 62, 150, 70, 60);
    ellipse(leftX - 62, 150, 70, 60);
  
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX + 62, 100, 70, 60);
    ellipse(rightX - 62, 100, 70, 60);
}

function animate() {
    // Move clouds
    leftX -= 1; // Move 1 pixel to the left
    rightX += 1; // Move 1 pixel to the right

    // Redraw the canvas
    draw();

    // Request the next animation frame
    requestAnimationFrame(animate);
}

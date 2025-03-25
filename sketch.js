let x, y;

function setup() {
    createCanvas(400, 400);
    x = int(random(400));
    y = int(random(400));
    updateCoordsDisplay();
}

function draw() {
    background(220);
    x = x + random(-5, 5);
    y = y + random(-5, 5);
    x = constrain(x, 0, 400);
    y = constrain(y, 0, 400);
    
    let distance = dist(mouseX, mouseY, x, y);
    circle(mouseX, mouseY, distance);
    
    updateCoordsDisplay(distance);
    
    if (distance < 3) {
        text("Encontrei!", 200, 200);
        noLoop();
    }
}

function updateCoordsDisplay(distance = 0) {
    document.getElementById('target-coords').textContent = `${int(x)}, ${int(y)}`;
    document.getElementById('mouse-coords').textContent = `${mouseX}, ${mouseY}`;
    document.getElementById('distance').textContent = distance.toFixed(1);
}
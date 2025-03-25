let x, y;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
    x = random(400);
    x = int(x);
    y = random(400);
    y = int(y);
}

function draw() {
    background(220);
    

    x = x + random(-5,5);
    y = y + random(-5,5);
    x = constrain(x,0,400);
    y = constrain(y,0,400);
    
    let distance = dist(mouseX, mouseY, x, y);
    circle(mouseX, mouseY, distance);
    
    document.getElementById('coords-info').innerHTML = 
        `Alvo: (${int(x)}, ${int(y)})<br>
         Mouse: (${int(mouseX)}, ${int(mouseY)})<br>
         Distância: ${int(distance)}`;

    if (distance < 3) {
        text("Encontrei!", 200, 200);
        noLoop();
    }
}
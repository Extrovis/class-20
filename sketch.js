var r1, r2;

function setup() {
    createCanvas(600, 600);

    r1 = createSprite(100, height / 2, 80, 60);
    r2 = createSprite(300, height / 2, 70, 50);

    r1.shapeColor = "green";
    r2.shapeColor = "purple";
}

function draw() {
    background("black");

    r2.x = mouseX;
    r2.y = mouseY;

    /*
     difference between the centers of r1 and r2 needs to
     be lesser than the summation of half the widths of both the sprites
    */

    if (abs(r2.x - r1.x) <= r1.width / 2 + r2.width / 2 && abs(r2.y - r1.y) <= r1.height / 2 + r2.height / 2) {
        r1.shapeColor = "red";
        r2.shapeColor = "red";
    } else if (!abs(r2.x - r1.x) <= r1.width / 2 + r2.width / 2 && !abs(r2.y - r1.y) <= r1.height / 2 + r2.height / 2) {
        r1.shapeColor = "green";
        r2.shapeColor = "purple";
    }

    console.log();

    drawSprites();
}
var canvas;
var ground1,ground2,ground3,ground4,ground5;
var box;
var edgeTop,edgeRight,edgeLeft;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,500);

    ground1 = createSprite(76,480,150,25);
    ground1.shapeColor = rgb(205,92,92);

    ground2 = createSprite(235,480,150,25);
    ground2.shapeColor = rgb(0,139,139);

    ground3 = createSprite(395,480,150,25);
    ground3.shapeColor = rgb(46,139,87);

    ground4 = createSprite(555,480,150,25);
    ground4.shapeColor = rgb(25,25,112);

    ground5 = createSprite(720,480,160,25);
    ground5.shapeColor = rgb(160,82,45);

    box = createSprite(70,10,30,30);

    edgeLeft = createSprite(0.9,10,1,990);
    edgeLeft.visible = true;

    edgeRight = createSprite(799,10,1,990);
    edgeRight.visible = true;

    edgeTop = createSprite(10,0.6,1580,1);
    edgeTop.visible = true;

}

function draw() {
    background(rgb(169,169,169));

    box.bounceOff(edgeRight);
    box.bounceOff(edgeLeft);
    box.bounceOff(edgeTop);

    if(keyCode==LEFT_ARROW){
        box.velocityY=5;
        box.velocityX=4;
    }

    if(ground1.isTouching(box)){
        box.bounceOff(ground1);
        box.shapeColor = rgb(205,92,92);
    }
    if(ground2.isTouching(box)){
        box.bounceOff(ground2);
        box.shapeColor = rgb(0,139,139);
        music.play();
    }
    if(ground3.isTouching(box)){
        box.bounceOff(ground3);
        box.shapeColor = rgb(46,139,87);
        music.stop();
    }
    if(ground4.isTouching(box)){
        box.bounceOff(ground4);
        box.shapeColor = rgb(25,25,112);
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(ground5.isTouching(box)){
        box.bounceOff(ground5);
        box.shapeColor = rgb(160,82,45)
    }


    drawSprites();
}

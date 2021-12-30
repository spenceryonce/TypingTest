let quicksand;

function preload() {
  quicksand = loadFont('Quicksand_Book.otf');
}


function setup(){
    createCanvas(windowWidth-20, windowHeight-20);
    frameRate(60);
    textFont(quicksand);
    textSize(20);

}

function draw(){
    background(0);
    text('Typing Test', 10, 10);

}

let history;
let count = 0;

function setup() {
    // put setup code here
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "chrome_history.json";
    loadJSON(url, loaded);
    background(255);
    textSize(60);
    textAlign(CENTER, CENTER);
    frameRate(1);
}

function draw() {
    background(255, 50);
    //rect(30, 20, 55, 55, 20);
    let textGroesse = map(history[count].visitCount, 1, 20, 14, 36);
    textSize(textGroesse);

    text(history[count].title, width / 2, height / 2);
    count = count + 1;
}

function loaded(data) {
    history = data;
    console.log(history[0].title);

    let aktuellestunde = 9;
    let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255)
    console.log(deckungsgrad)
}
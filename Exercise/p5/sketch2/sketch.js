let history;

function setup() {
    // put setup code here
    createCanvas(640, 640);
    let url = "chrome_history.json";
    loadJSON(url, loaded);
    background(255);
}

function draw() {
    // put drawing code here
    background(255, 50);
    rect(30, 20, 55, 55, 20);
}

function loaded(data) {
    history = data;
    console.log(history[0].title);
}
let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++; /* ist dasselbe wie n=n+1*/
    //console.log(document.getElementById("element"));
    document.getElementById("element").style.top = (n * 20) + "px";
    document.getElementById("element").style.left = (n * 50) + "px";


}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}


function neuesBild() {
    n++;
    let versatz = 20;
    let myImage = new Image(200, 100);
    myImage.src = 'assets/images/stalking.jpg';
    myImage.classList.add('bild');
    myImage.style.left = Math.random() * window.innerWidth + "px";
    myImage.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(myImage);
}
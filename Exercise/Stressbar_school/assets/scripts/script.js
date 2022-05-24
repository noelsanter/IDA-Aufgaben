let stress = document.querySelector("#stress")
console.log(stress)
let sizes = stress.getBoundingClientRect()
console.log(sizes)
let num_clicks = 10
let increase_size = sizes.width / num_clicks

let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++; /* ist dasselbe wie n=n+1*/
    //console.log(document.getElementById("element"));
    if (n <= num_clicks) {

        document.getElementById("element").style.width = (n * increase_size) + "px";
    }
}

let specialbutton = document.querySelector("button.specialbutton")
console.log(specialbutton)


let frame_count = 0
window.requestAnimationFrame(animate)

function animate() {
    window.requestAnimationFrame(animate)

    if (frame_count % 90 == 0) {
        let x = Math.random() * window.innerWidth
        let y = Math.random() * window.innerHeight
        specialbutton.style.left = x + "px"
        specialbutton.style.top = y + "px"
    }

    frame_count++

}
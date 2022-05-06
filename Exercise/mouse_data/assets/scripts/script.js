let mouse = []
let max = 500
document.onmousemove = function(e) {
    let pos_x = e.clientX
    let pos_y = e.clientY
    let object = {
        x: pos_x,
        y: pos_y
    }

    if (mouse.length < max) {
        //if amount of data is less than max
        mouse.push(object)
    } else {
        console.log('to many data points')
    }

    //console.log(mouse)
}

let pointer = document.getElementById('pointer')
pointer.style.position = 'fixed'
console.log(pointer)

/**
 * Animate our collected data
 */
let index = 0
window.requestAnimationFrame(animate)

function animate() {
    window.requestAnimationFrame(animate)

    //console.log(mouse[index])
    //console.log(index)
    if (mouse.length > 0) {

        pointer.style.left = mouse[index].x + 'px'
        pointer.style.top = mouse[index].y + 'px'
    }

    index++
    if (index >= mouse.length) {
        index = 0
    }


}
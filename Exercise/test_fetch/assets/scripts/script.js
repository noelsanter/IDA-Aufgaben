function request_cats_facts() {
    let base_url = 'https://cat-fact.herokuapp.com'

    let query = '/facts'

    fetch(base_url + query)
        .then(function(response) {
            return response.json()

        })
        .then(function(data) {
            build_facts(data)

        })
        .catch(function(error) {
            console.log(error)
        })
}



function build_facts(data) {
    let cat_facts_div = document.querySelector('.cats-facts')
        // console.log(data)
        //console.log(cat_facts_div)
    for (let i = 0; i < data.length; i++) {
        let data_point = data[i]
            //console.log(data_point)
            //display only the text
            //console.log(data_point['text'])
        let cat_fact = document.createElement('div')
        cat_fact.textContent = data_point['text']
        cat_facts_div.appendChild(cat_fact)

    }
}

function request_coffee() {
    let base_url = 'https://coffee.alexflipnote.dev'
    let query = '/random.json'
    fetch(base_url + query)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                build_coffee(data)
            }
        )
        .catch(
            function(error) {
                console.log(error)
            }
        )
}

function build_coffee(data) {
    console.log(data['file'])
    let coffee_div = document.querySelector('.coffee')
    let coffee_img = document.createElement('img')
    coffee_img.src = data['file']
    coffee_div.appendChild(coffee_img)

}

window.onload = function() {

    let coffee_button = document.querySelector('.kafi')
    console.log(coffee_button)

    coffee_button.addEventListener('click', request_coffee)
}
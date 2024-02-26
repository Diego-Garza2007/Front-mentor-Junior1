const input = document.getElementById('emailSpace');
const subscribe = document.getElementById('sub');
const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const span = document.getElementById('fill')
const form = document.getElementById('form')
const dismiss = document.querySelector('.page2__button')

function proceed() {
    if (input.value.match(mailformat)) {
        console.log('se Procede a la siguiente pagina')
        //page2.setAttribute('class', 'container2')
        //page1.replaceWith(page2)
        span.innerText = input.value
    } else {
        console.log('ha ocurrido un error')
        input.value = null
        input.classList.add('error')
        document.querySelector('.section__textError').classList.remove('oculto')
        //error.setAttribute('class', 'invalid')
        //input.classList.add('imail')
        //error.style.color = 'red'
        //subscribe = null
    }
}


subscribe.addEventListener('click', proceed)

input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        proceed()
    }
})

form.addEventListener("submit", function(event) {
    event.preventDefault()
    input.value = null

    document.querySelector('.page2').classList.remove("oculto")
    document.querySelector('.section').classList.add("oculto")
    document.querySelector('.section').classList.remove("section")
})

dismiss.addEventListener("click", function() {
    document.querySelector('.page2').classList.add("oculto")
    document.querySelector('.oculto').classList.add("section")
    document.querySelector('.section').classList.remove("oculto")
})

// https://github.com/wazirwazir/Newsletter-Sign-up-form/blob/main/index.js
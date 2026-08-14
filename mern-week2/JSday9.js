const p = document.querySelector(".text")

const bttn = document.querySelector(".bttn")
bttn.addEventListener('click', function () {
    if (p.style.color !== 'black'){
        p.style.color = 'black'
    } else {
        p.style.color = 'maroon'
    }
})
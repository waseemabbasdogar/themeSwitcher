const body = document.querySelector('body')
const buttons = document.querySelectorAll('.btn')

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id
    })
})
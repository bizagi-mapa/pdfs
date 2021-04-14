window.addEventListener('load', () => {
    const material_buttons = document.querySelectorAll('.material_button')

    material_buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(`${e.pageX - button.offsetLeft}px`)            
            button.insertAdjacentHTML('afterBegin', '<span class="button_circle"></span>')

            const circle = button.querySelector('.button_circle')

            circle.style.left = `${e.pageX - button.offsetLeft}px`
            circle.style.top = `${e.pageY - button.offsetTop}px`
            circle.classList.add('active')

            setTimeout(() => {
                circle.remove('active')
                button.href = button.dataset.href
                window.location.href = button.dataset.href
            }, 700)
        })
    })
})
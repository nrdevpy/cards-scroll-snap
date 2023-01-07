const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
})

const cards = document.querySelectorAll('.card')

cards.forEach(card =>{
    observer.observe(card)
})
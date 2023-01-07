const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
},{
    threshold: .75,
}
)
const cards = document.querySelectorAll('.card')

cards.forEach(card =>{
    observer.observe(card)
})
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
},{
    threshold: .75,
}
)
const cards = document.querySelectorAll('.card')
const bullets = document.querySelector('.bullets')
let bulletsHtml = '';

cards.forEach(card =>{
    observer.observe(card)
    bulletsHtml += `
        <li class="bullet"></li>
    `;
})
bullets.innerHTML = bulletsHtml;
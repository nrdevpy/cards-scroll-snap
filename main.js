const cards = document.querySelectorAll('.card')
const bullets = document.querySelector('.bullets')
let bulletsHtml = '';

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)

        let count = 0;

        if (entry.isIntersecting) {
            cards.forEach(card => {
                if (card.className.includes('show')) {
                    const activeBullet = bullets.children[count];
                    activeBullet.classList.toggle('active')
                }
                count += 1;
            })
        }
    })
}, {
    threshold: 0,
})

cards.forEach(card => {
    observer.observe(card)
    bulletsHtml += `
        <li class="bullet"></li>
    `;
})
bullets.innerHTML = bulletsHtml;
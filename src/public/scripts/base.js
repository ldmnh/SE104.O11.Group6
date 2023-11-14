// Using for onTopBtn
window.addEventListener('scroll', () => {
    maxScroll = 250
    if (window.scrollY > maxScroll) {
        document.querySelector('#on-top-btn').style.opacity = 1
    } else {
        document.querySelector('#on-top-btn').style.opacity = window.scrollY / maxScroll
    }
})

function scrollOnTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
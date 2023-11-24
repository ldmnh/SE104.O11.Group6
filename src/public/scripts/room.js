function triggerChangeEvent(element) {
    const event = new Event('change');
    element.dispatchEvent(event);
}

function minus(event) {
    const element = event.currentTarget
    const input = element.nextElementSibling
    input.value = Number(input.value) - 1
    triggerChangeEvent(input)
}

function plus(event) {
    const element = event.currentTarget
    const input = element.previousElementSibling
    input.value = Number(input.value) + 1
    triggerChangeEvent(input)
}

// slider
var slideIndex = 0

function nextSlide(event) {
    slideIndex = slideIndex + 1

    const thumnails = event.currentTarget.parentElement.nextElementSibling.querySelectorAll('.modal__thumnail')
    let firstSrc = thumnails[0].src
    thumnails.forEach((ele, index) => {
        if (index == thumnails.length - 1)
            ele.src = firstSrc
        else
            ele.src = thumnails[index + 1].src
    })

    showSlides(event)
}

function prevSlide(event) {
    slideIndex = slideIndex - 1

    const thumnails = event.currentTarget.parentElement.nextElementSibling.querySelectorAll('.modal__thumnail')
    let tempSrc = thumnails[0].src
    thumnails.forEach((ele, index) => {
        if (index != thumnails.length - 1)
            thumnails[index].src = thumnails[index + 1].src
    })
    thumnails[thumnails.length - 1].src = tempSrc

    showSlides(event)
}

function resetSlide(event) {
    const slideContainer = event.currentTarget.parentElement.parentElement.parentElement.previousElementSibling
    slideContainer.querySelector('.modal__slide').src = slideContainer.querySelector('.modal__thumnail').src
}

function currentSlide(event) {
    const slide = event.currentTarget.parentElement.previousElementSibling.querySelector('.modal__slide')
    slide.src = event.currentTarget.querySelector('.modal__thumnail').src
}

function showSlides(event) {
    const thumnails = event.currentTarget.parentElement.nextElementSibling.querySelectorAll('.modal__thumnail')
    const slide = event.currentTarget.parentElement.querySelector('.modal__slide')

    if (slideIndex == -1)
        slideIndex = thumnails.length - 1
    else if (slideIndex == thumnails.length)
        slideIndex = 0

    slide.src = thumnails[slideIndex].src
}
function minus(event) {
    const element = event.currentTarget
    const input = element.nextElementSibling
    input.value = Number(input.value) - 1
}

function plus(event) {
    const element = event.currentTarget
    const input = element.previousElementSibling
    input.value = Number(input.value) + 1
}
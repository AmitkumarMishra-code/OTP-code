const inputBoxes = document.querySelectorAll('input')
const submitButton = document.querySelector('.submit')

inputBoxes.forEach(input => input.addEventListener('keyup', keyUpHandler))
    // inputBoxes.forEach(input => input.addEventListener('keydown', keyPressHandler))

console.log(inputBoxes)

function keyUpHandler(e) {
    if (e.key == "Backspace") {
        backSpaceHandler(e)
        return
    } else if (e.keyCode < 48 || e.keyCode > 57) {
        e.target.value = ''
        return
    } else {
        let current = e.target
        if (current.nextElementSibling && current.nextElementSibling.classList.contains('hyphen')) {
            current.nextElementSibling.nextElementSibling.focus()
        } else if (current.nextElementSibling) {
            current.nextElementSibling.focus()
        }
        // else {
        //     submitButton.focus()
        // }
    }
}

// function keyPressHandler(e) {
//     console.log(e.keyCode)
//     if (e.key == "Backspace") {
//         backSpaceHandler(e)
//     } else if (e.keyCode < 48 || e.keyCode > 57) {
//         console.log('in keypress')
//         e.target.value = ''
//         return
//     }
// }

function backSpaceHandler(e) {
    if (e.target.value.length) {
        e.target.value = ''
        return
    } else {
        let current = e.target
        if (current.previousElementSibling && current.previousElementSibling.classList.contains('hyphen')) {
            current.previousElementSibling.previousElementSibling.value = ''
            current.previousElementSibling.previousElementSibling.focus()
        } else if (current.previousElementSibling) {
            current.previousElementSibling.value = ''
            current.previousElementSibling.focus()
        }
    }
}
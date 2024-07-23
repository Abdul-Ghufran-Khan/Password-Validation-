// getting id's
let inputfield = document.getElementById('field')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let p5 = document.getElementById('p5')
let icon = document.getElementById('icon')

inputfield.addEventListener('input',()=>{
    let str = ''
    str = inputfield.value
    // 1st contidion start
    if (str.match(/[0-9]/)) {
        p1.style.textDecoration = 'none'
        p1.style.backgroundColor = 'rgba(27, 214, 111, 0.5)'
    } else {
        p1.style.textDecoration = 'line-through #1f1e1e 3px'
        p1.style.background = 'transparent'
    }
    // 1st contidion end

    // 2nd contidion start
    if (str.length >= 12 ) {
        p2.style.textDecoration = 'none'
        p2.style.backgroundColor = 'rgba(27, 214, 111, 0.5)'
    } else {
        p2.style.textDecoration = 'line-through #1f1e1e 3px'
        p2.style.background = 'transparent'
    }
    // 2nd contidion end

    // 3rd contidion start
    if (str.match(/[!\@\#\$\%\^\&\*\(\)\{\}\[\]\_\=\+\?\/\.\>\,\<]/)) {
        p3.style.textDecoration = 'none'
        p3.style.backgroundColor = 'rgba(27, 214, 111, 0.5)'
    } else {
        p3.style.textDecoration = 'line-through #1f1e1e 3px'
        p3.style.background = 'transparent'
    }
    // 3rd contidion end

    // 4th contidion start
    if (str.match(/[a-z]/)) {
        p4.style.textDecoration = 'none'
        p4.style.backgroundColor = 'rgba(27, 214, 111, 0.5)'
    } else {
        p4.style.textDecoration = 'line-through #1f1e1e 3px'
        p4.style.background = 'transparent'
    }
    // 4th contidion end

    // 5th contidion start
    if (str.match(/[A-Z]/)) {
        p5.style.textDecoration = 'none'
        p5.style.backgroundColor = 'rgba(27, 214, 111, 0.5)'
    } else {
        p5.style.textDecoration = 'line-through #1f1e1e 3px'
        p5.style.background = 'transparent'
    }
    // 5th contidion end
})

icon.addEventListener('click',()=>{
    if (inputfield.value != '' || inputfield.value >=12 ) {
        navigator.clipboard.writeText(inputfield.value); 
    }
})
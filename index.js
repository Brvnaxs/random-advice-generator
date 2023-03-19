
const body = document.body
window.addEventListener("load", e =>{
    e.preventDefault()
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then((i) =>{
        const adviceNumber = document.querySelector('.advice-number')
        const number = document.createTextNode(i.slip.id)
        const adviceContent = document.querySelector('.advice-content')
        const advice = document.createTextNode(`"${i.slip.advice}"`)
        adviceNumber.appendChild(number)
        adviceContent.appendChild(advice)

    })
})

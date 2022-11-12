
const botao = document.querySelector('button')
botao.addEventListener('click', ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then((i) =>{
        const advice = document.querySelector('.advice')
        const txt = `<p>${i.slip.advice}</p>`
        advice.innerHTML =  txt;
    })
})

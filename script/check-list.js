let container_check = document.getElementById('containerCheck')
let container_tempo = document.getElementById('containerTempo')
let btn_ok = document.getElementById('btn-ok')

btn_ok.addEventListener('click', function () {
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    let habilitado = document.querySelectorAll('input[type="checkbox"]:checked')

    if (checkbox.length === habilitado.length) {
        container_check.style.display = 'none'
        container_tempo.style.display = 'flex'
        startRegressivo()
        setTimeout(startCronometro, 5000)
    } else {
        alert('[ERRO] - Todos os Check-List são obrigatórios - [ERRO]')
    }
})
let parar_intervalo
let intervalo_total
let container_intervalo = document.getElementById('containerIntervalo')
let tempo_intervalo = document.getElementById('timerIntervalo')
let btn_intervalo = document.getElementById('btn-intervalo')

btn_intervalo.addEventListener('click', function () {
    container_sessao.style.display = 'none'
    let mins_intervalo = 15
    let segs_intervalo = 0
    mins_intervalo = mins_intervalo < 10 ? '0' + mins_intervalo : mins_intervalo
    segs_intervalo = segs_intervalo < 10 ? '0' + segs_intervalo : segs_intervalo

    container_intervalo.setAttribute('style', 'display: flex; visibility: hidden')

    function intervalo() {
        container_intervalo.setAttribute('style', 'visibility: visible;')
        tempo_intervalo.setAttribute('style',
            'padding: 5px 20px; border: 2px solid orange; border-radius: 10px; transition: 800ms;')
        tempo_intervalo.innerText = `${mins_intervalo}:${segs_intervalo}`

        if (--segs_intervalo < 10) {
            if (segs_intervalo < 0) {
                segs_intervalo = 59
                mins_intervalo--
                if (mins_intervalo < 10) {
                    if (mins_intervalo < 0) {
                        clearInterval(parar_intervalo)
                        mins_intervalo = 0
                    } else {
                        mins_intervalo = '0' + mins_intervalo
                    }
                }
            } else {
                segs_intervalo = '0' + segs_intervalo
            }
        }
        intervalo_total = Number(mins_intervalo)
    }
    parar_intervalo = setInterval(intervalo, 1000)
})
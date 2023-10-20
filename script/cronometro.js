let mins_totais
let parar_cronometro
let tempo_cronometro = document.getElementById('cronometro')
let title = document.getElementsByTagName('title')[0]

function startCronometro() {
    let minutos = 0
    let segundos = 0
    segundos = segundos < 10 ? '0' + segundos : segundos
    minutos = minutos < 10 ? '0' + minutos : minutos

    tempo_cronometro.setAttribute('style', 'display: block; visibility: hidden;')

    function tempoEstudo() {
        btn_parar.setAttribute('style',
            'display: block; padding: 8px 20px; transition: 1s;')
        tempo_cronometro.setAttribute('style',
            'padding: 0 10px; border: 2px solid orange; border-radius: 10px; transition: 1s;')
        tempo_cronometro.innerHTML = `${minutos}:${segundos}`
        title.innerHTML = `${minutos}:${segundos} - Cronômetro Para Estudos`

        if (++segundos >= 10) {
            if (segundos == 60) {
                segundos = '0' + 0
                ++minutos
                if (minutos < 10) {
                    minutos = '0' + minutos
                }
            }
        } else {
            segundos = '0' + segundos
        }
        if (minutos == 90 & segundos > 0) {
            clearInterval(parar_cronometro)
            btnClick()
        }
        mins_totais = Number(minutos)
    }
    parar_cronometro = setInterval(tempoEstudo, 1000)
}

let horas_inicio
let mins_inicio
let contagem_regressiva = document.getElementById('contagem')

function startRegressivo() {
    let data_inicio = new Date
    let segs_regressivo = 3
    let a = setInterval(tempo3s, 1000)

    function tempo3s() {
        contagem_regressiva.setAttribute('style',
            'width: 150px; height: 150px; line-height: 140px; text-align: center; font-size: 6rem; font-weight: bold; border: 2px solid orange; border-radius: 50%; transition: 500ms;')
        contagem_regressiva.innerText = segs_regressivo
        if (segs_regressivo-- === -1) {
            clearInterval(a)
            contagem_regressiva.innerText = null
            contagem_regressiva.style.display = 'none'

            horas_inicio = data_inicio.getHours()
            mins_inicio = data_inicio.getMinutes()
            horas_inicio = horas_inicio < 10 ? '0' + horas_inicio : horas_inicio
            mins_inicio = mins_inicio < 10 ? '0' + mins_inicio : mins_inicio
        }
    }
}
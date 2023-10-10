let btn_novaSessao = document.getElementById('btn-novaSessao')

btn_novaSessao.addEventListener('click', function () {
    container_encerrado.setAttribute('style', 'display: none')
    contagem_regressiva.removeAttribute('style')
    tempo_cronometro.setAttribute('style', 'display: none;')
    btn_parar.setAttribute('style', 'display: none')
    intervalo_total = null
    carregando.setAttribute('style', 'display: block')

    function novaSessao() {
        carregando.setAttribute('style', 'display: none')
        container_check.setAttribute('style', 'display: flex')
    }
    setTimeout(novaSessao, 2500)
})

let container_encerrado = document.getElementById('containerEncerrado')

function estudosEncerrados() {
    clearInterval(parar_intervalo)
    container_sessao.setAttribute('style', 'display: none')
    container_intervalo.setAttribute('style', 'display: none')
    carregando.setAttribute('style', 'display: block')

    let dados_estudando = document.getElementById('estudando')
    let dados_intervalo = document.getElementById('tempoIntervalo')
    let dados_totais = document.getElementById('total')

    function dadosText() {
        carregando.setAttribute('style', 'display: none')
        container_encerrado.setAttribute('style', 'display: flex')

        if (horas_totais === 0) {
            dados_estudando.innerText = `Estudando: ${mins_totais} Minutos`
        } else if (horas_totais === 1) {
            mins_totais += 60
            dados_estudando.innerText = `Estudando: ${mins_totais} Minutos`
        }
        if (intervalo_total == null) {
            dados_intervalo.innerText = `Intervalo: 0 Minutos`
            dados_totais.innerText = `Total: ${mins_totais} Minutos`
        } else {
            dados_intervalo.innerText = `Intervalo: ${(14 - intervalo_total)} Minutos`
            dados_totais.innerText = `Total: ${(mins_totais + (14 - intervalo_total))} Minutos`
        }
    }
    setTimeout(dadosText, 1000)
}

let parar_intervalo
let intervalo_total
let container_intervalo = document.getElementById('containerIntervalo')
let tempo_intervalo = document.getElementById('timerIntervalo')
let btn_intervalo = document.getElementById('btn-intervalo')

btn_intervalo.addEventListener('click', function () {
    container_sessao.setAttribute('style', 'display: none')
    let mins_intervalo = 15
    let segs_intervalo = 0
    mins_intervalo = mins_intervalo < 10 ? '0' + mins_intervalo : mins_intervalo
    segs_intervalo = segs_intervalo < 10 ? '0' + segs_intervalo : segs_intervalo

    function intervalo() {
        container_intervalo.setAttribute('style', 'visibility: visible')
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

let carregando = document.getElementById('carregando')
let container_sessao = document.getElementById('containerSessao')
let total_sessao = document.getElementById('totalSessao')
let btn_parar = document.getElementById('btn-parar')

btn_parar.addEventListener('click', function () {
    clearInterval(parar_cronometro)
    container_tempo.setAttribute('style', 'display: none')

    let data_fim = new Date
    let horas_fim = data_fim.getHours()
    let mins_fim = data_fim.getMinutes()
    horas_fim = horas_fim < 10 ? '0' + horas_fim : horas_fim
    mins_fim = mins_fim < 10 ? '0' + mins_fim : mins_fim

    function spinner() {
        carregando.setAttribute('style', 'display: block')
    }
    setTimeout(spinner, 500)

    function dadosSessao() {
        carregando.setAttribute('style', 'display: none')
        container_sessao.setAttribute('style', 'display: flex')
        total_sessao.textContent = `${horas_inicio}:${mins_inicio} - ${horas_fim}:${mins_fim}`
    }
    setTimeout(dadosSessao, 2500)
})

let horas_totais
let mins_totais
let parar_cronometro
let tempo_cronometro = document.getElementById('cronometro')

function startCronometro() {
    let horas = 0
    let minutos = 0
    let segundos = 0
    segundos = segundos < 10 ? '0' + segundos : segundos
    horas = horas < 10 ? '0' + horas : horas
    minutos = minutos < 10 ? '0' + minutos : minutos

    function tempoEstudo() {
        btn_parar.setAttribute('style', 'display: block')
        tempo_cronometro.setAttribute('style', 'visibility: visible')
        tempo_cronometro.innerHTML = `${horas}:${minutos}:${segundos}`

        if (++segundos >= 10) {
            if (segundos == 60) {
                segundos = '0' + 0
                ++minutos
                if (minutos < 10) {
                    minutos = '0' + minutos
                } else if (minutos == 60) {
                    minutos = '0' + 0
                    ++horas
                    if (horas < 10) {
                        horas = '0' + horas
                    }
                }
            }
        } else {
            segundos = '0' + segundos
        }
        if (horas == 1 & minutos == 30 & segundos > 0) {
            clearInterval(parar_cronometro)
        }
        horas_totais = Number(horas)
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
            'font-size: 6rem; font-weight: bold; color: white; padding: 10px 40px; border: 2px solid orange; border-radius: 50%; transition: 500ms')
        contagem_regressiva.innerText = segs_regressivo
        if (segs_regressivo-- === -1) {
            clearInterval(a)
            contagem_regressiva.innerText = null
            contagem_regressiva.style.display = 'none'
            tempo_cronometro.style.display = 'block'

            horas_inicio = data_inicio.getHours()
            mins_inicio = data_inicio.getMinutes()
            horas_inicio = horas_inicio < 10 ? '0' + horas_inicio : horas_inicio
            mins_inicio = mins_inicio < 10 ? '0' + mins_inicio : mins_inicio
        }
    }
}

let container_check = document.getElementById('containerCheck')
let container_tempo = document.getElementById('containerTempo')
let btn_ok = document.getElementById('btn-ok')

btn_ok.addEventListener('click', function () {
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    let checked = document.querySelectorAll('input[type="checkbox"]:checked')

    if (checkbox.length === checked.length) {
        container_check.style.display = 'none'
        container_tempo.style.display = 'flex'
        startRegressivo()
        setTimeout(startCronometro, 5000)
    } else {
        alert('[ERRO] - Todos os Check-List são obrigatórios - [ERRO]')
    }
})
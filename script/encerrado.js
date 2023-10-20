let btn_novaSessao = document.getElementById('btn-novaSessao')

btn_novaSessao.addEventListener('click', function () {
    contagem_regressiva.removeAttribute('style')
    intervalo_total = null
    container_encerrado.style.display = 'none'
    tempo_cronometro.style.display = 'none'
    btn_parar.style.display = 'none'
    carregando.style.display = 'block'

    function novaSessao() {
        carregando.style.display = 'none'
        container_check.style.display = 'flex'
    }
    setTimeout(novaSessao, 2500)
})

let container_encerrado = document.getElementById('containerEncerrado')

function estudosEncerrados() {
    clearInterval(parar_intervalo)
    title.innerHTML = 'Cronômetro Para Estudos'
    container_sessao.style.display = 'none'
    container_intervalo.style.display = 'none'
    carregando.style.display = 'block'

    let dados_estudando = document.getElementById('estudando')
    let dados_intervalo = document.getElementById('tempoIntervalo')
    let dados_totais = document.getElementById('total')

    function dadosText() {
        carregando.style.display = 'none'
        container_encerrado.style.display = 'flex'

        if (intervalo_total == null) {
            dados_estudando.innerText = `Estudando: ${mins_totais} Minutos`
            dados_intervalo.innerText = `Intervalo: 0 Minutos`
            dados_totais.innerText = `Total: ${mins_totais} Minutos`
        } else {
            dados_estudando.innerText = `Estudando: ${mins_totais} Minutos`
            dados_intervalo.innerText = `Intervalo: ${(14 - intervalo_total)} Minutos`
            dados_totais.innerText = `Total: ${(mins_totais + (14 - intervalo_total))} Minutos`
        }
    }
    setTimeout(dadosText, 1000)
}
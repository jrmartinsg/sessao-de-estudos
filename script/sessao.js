let carregando = document.getElementById('carregando')
let container_sessao = document.getElementById('containerSessao')
let total_sessao = document.getElementById('totalSessao')
let btn_parar = document.getElementById('btn-parar')

function btnClick() {
    clearInterval(parar_cronometro)
    container_tempo.style.display = 'none'
    title.innerHTML = 'Cronômetro Para Estudos'

    let data_fim = new Date
    let horas_fim = data_fim.getHours()
    let mins_fim = data_fim.getMinutes()
    horas_fim = horas_fim < 10 ? '0' + horas_fim : horas_fim
    mins_fim = mins_fim < 10 ? '0' + mins_fim : mins_fim

    function spinner() {
        carregando.style.display = 'block'
    }
    setTimeout(spinner, 500)

    function dadosSessao() {
        carregando.style.display = 'none'
        container_sessao.style.display = 'flex'
        total_sessao.textContent = `${horas_inicio}:${mins_inicio} - ${horas_fim}:${mins_fim}`
    }
    setTimeout(dadosSessao, 2500)
}
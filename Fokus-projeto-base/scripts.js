const html = document.querySelector('html')
const button = document.querySelectorAll('.app__card-button')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTimer = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const playMusicInput = document.getElementById('alternar-musica')
const startPauseBt = document.querySelector('#start-pause')
const comecarouPausaSpan = document.querySelector('#start-pause span')
const music = new Audio('sons/luna-rise-part-one.mp3')
const musicPlay = new Audio('sons/play.wav')
const musicPause = new Audio('sons/pause.mp3')
const musicBeep = new Audio('sons/beep.mp3')
const alternarIcone = document.querySelector('.app__card-primary-butto-icon')
music.loop = true
let tempoDecorridoSegundo = 1500
let intervaloId = null

displayTempo()


focoBt.addEventListener('click', () => {
    tempoDecorridoSegundo = 1500
    alterarContexto('foco', 'foco.png')
    focoBt.classList.add('active')
})
curtoBt.addEventListener('click', () => {
    tempoDecorridoSegundo = 300
    alterarContexto('descanso-curto', 'descanso-curto.png')
    curtoBt.classList.add('active')
})
longoBt.addEventListener('click', () => {
    tempoDecorridoSegundo = 900
    alterarContexto('descanso-longo', 'descanso-longo.png')
    longoBt.classList.add('active')
})

playMusicInput.addEventListener('change', () => {
    if (playMusicInput.checked) {
        music.play()
    }   else {
        music.pause()
    }
})

const contagemRegressiva = () => {
    if (tempoDecorridoSegundo <= 0) {
        zerar()
        return
    } if (tempoDecorridoSegundo <= 7) {
        if (musicBeep.paused)
        musicBeep.play()
    }
    tempoDecorridoSegundo -= 1
    displayTempo()
}

startPauseBt.addEventListener('click', iniciarouPausar )

function alterarContexto(contexto, imagem) {
    displayTempo()
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `imagens/${imagem}`)
    console.log(`> Alterando o contexto para: ${contexto}`)
    // switch (contexto) {
    //     case "foco":
    //         titulo.innerHTML = `Otimize sua produtividade,<br>
    //             <strong class="app__title-strong">mergulhe no que importa.</strong>`
    //         break
        
    //     case "descanso-curto":
    //         titulo.innerHTML = `Que tal dar uma respirada?<br>
    //             <strong class="app__title-strong">Faça uma pausa curta!</strong>`
    //         break

    //     case "descanso-longo":
    //         titulo.innerHTML = `Hora de voltar à superfécie.<br>
    //             <strong class="app__title-strong">Faça uma pausa longa.</strong>`
    //         break
        
    //         default:
    //             break
    // }
    if (contexto == 'foco') {
        titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
    } if (contexto == 'descanso-curto') {
        titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
    } if (contexto == 'descanso-longo') {
        titulo.innerHTML = `Hora de voltar à superfécie.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
    }

    button.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
}

function iniciarouPausar() {
    if (intervaloId) {
        pausar()
        musicPause.play()
        //comecarouPausaSpan.innerHTML = 'Começar'
        //alternarIcone.setAttribute('src', 'imagens/play_arrow.png')
        return
    } else {
        musicPlay.play()
        intervaloId = setInterval(contagemRegressiva, 1000)
        comecarouPausaSpan.innerHTML = 'Pausar'
        alternarIcone.setAttribute('src', 'imagens/pause.png')
    }
}

function pausar() {
    clearInterval(intervaloId)
    intervaloId = null
    comecarouPausaSpan.innerHTML = 'Começar'
    alternarIcone.setAttribute('src', 'imagens/play_arrow.png')
    musicBeep.pause()
    musicBeep.currentTime = 0
}

function zerar() {
    pausar()
    tempoDecorridoSegundo = 10
}

function displayTempo () {
    const time = new Date(tempoDecorridoSegundo * 1000)

    const minutos = time.getUTCMinutes().toString().padStart(2, '0')
    const segundos = time.getUTCSeconds().toString().padStart(2, '0')

    displayTimer.innerHTML = `${minutos}:${segundos}`
}
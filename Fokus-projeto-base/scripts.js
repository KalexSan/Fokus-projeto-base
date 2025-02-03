const html = document.querySelector('html')
const button = document.querySelectorAll('.app__card-button')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTimer = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const playMusicInput = document.getElementById('alternar-musica')
const music = new Audio('sons/luna-rise-part-one.mp3')
music.loop = true
const startPauseBt = document.querySelector('.app__card-primary-button')
const timeFocus = 1500
const timeShortBreak = 300
const timeLongBreak = 900

focoBt.addEventListener('click', () => {
    alterarContexto('foco', 'foco.png')
    focoBt.classList.add('active')
})
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto', 'descanso-curto.png')
    curtoBt.classList.add('active')
})
longoBt.addEventListener('click', () => {
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

function alterarContexto(contexto, imagem) {
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
            console.log('foco')
    } if (contexto == 'descanso-curto') {
        titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            console.log('descanso-curto')
    } if (contexto == 'descanso-longo') {
        titulo.innerHTML = `Hora de voltar à superfécie.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            console.log('descanso-longo')
    }

    button.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
}
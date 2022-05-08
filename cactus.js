import { incrementCustomProperty, getCustomProperty, setCustomProperty  } from './updateCustomProperty.js'

const SPEED = .05
const CACTUS_INERVAL_MIN = 500
const CACTUS_INERVAL_MAX = 2000
const worldEl = document.querySelector('[data-world]')

let nextCactusTime

export function setupCactus(){
    nextCactusTime = CACTUS_INERVAL_MIN
}

export function updateCactus(delta, speedScale){
    document.querySelectorAll("[data-cactus]").forEach(cactus => {
        incrementCustomProperty(cactus, "--left", delta * speedScale * SPEED * -1)
        if (getCustomProperty(cactus, "--left") <= -100){
            cactus.remove()
        }
    })

    if (nextCactusTime <= 0){
        createCactus()
        nextCactusTime = randomNumberBetween(CACTUS_INERVAL_MIN, CACTUS_INERVAL_MAX) / speedScale
    }
    nextCactusTime -= delta
}

function createCactus(){
    const cactus = document.createElement('img')
    cactus.dataset.cactus = true
    cactus.src = "img/cactus.png"
    cactus.classList.add("cactus")
    worldEl.append(cactus)
    setCustomProperty(cactus, "--left", 100)
}

function randomNumberBetween(min,max){
   return Math.floor(Math.random() * (max-min + 1)+ min)
}
const worldEl = document.querySelector ('[data-world]')
const scoreEl = document.querySelector ('[data-score]')
const startScreenEl = document.querySelector ('[data-start-screen]')

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = .00001
import {  updateGround, setupGround  } from './ground.js'
import {  updateDino, setupDino  } from './dino.js'
setPixelToWorldScale()
window.addEventListener('resize',setPixelToWorldScale)
document.addEventListener('keydown', handlestart, {once:true})


let lastTime
let speedScale
let score
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime
    updateGround(delta, speedScale)
    updateDino(delta, speedScale)
    updateSpeedScale(delta)
    updateScore(delta)

    lastTime = time
    window.requestAnimationFrame(update)
}

function updateSpeedScale(delta){
    speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta){
    score += delta * .01
    scoreEl.textContent = Math.floor(score)
}

 function handlestart() {
     lastTime = null
     speedScale = 1
     score = 0
     setupGround()
     setupDino()
     startScreenEl.classList.add('hide')
    window.requestAnimationFrame(update)
 }
function setPixelToWorldScale() {
    let worldToPixelScale
        if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
            worldToPixelScale = window.innerWidth / WORLD_WIDTH
        } else {
            worldToPixelScale = window.innerheight / WORLD_HEIGHT
        }
    worldEl.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldEl.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}
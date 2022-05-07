import { incrementCustomProperty, getCustomProperty, setCustomProperty } from './updateCustomProperty.js'

const groundEl = document.querySelectorAll("[data-ground]")
const SPEED = .05

export function setupGround() {
    setCustomProperty(groundEl[0], "--left", 0)
    setCustomProperty(groundEl[1], "--left", 300)
  }

export function updateGround(delta, speedScale) {
    groundEl.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)

        if (getCustomProperty(ground, "--left") <= -300) {
            incrementCustomProperty(ground, "--left", 600)
        }
    })
}

